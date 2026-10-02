import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectQnaSocket } from "../../../api/qna/qnaSocket";
import RoomSubheader from "../../../components/common/room/RoomSubheader";
import { createQuestion, getParticipantInfo, getParticipantPresence, getParticipantQnaRoom, getQuestionList } from "../../../api/qna/participantQnaApi";
import "../../../css/participant/qna/QnaParticipantPage.css"
import RoomHeader from "../../../components/common/room/RoomHeader";
import ParticipantReadyView from "../../../components/participant/qna/ParticipantReadyView";
import ParticipantQuestionOpenView from "../../../components/participant/qna/ParticipantQuestionOpenView";
import ParticipantVotingOpenView from "../../../components/participant/qna/ParticipantVotingOpenView";
import ParticipantAnsweringView from "../../../components/participant/qna/ParticipantAnsweringView";
import ParticipantFinishedView from "../../../components/participant/qna/ParticipantFinishedView";
import ParticipantInfoPanel from "../../../components/participant/qna/ParticipantInfoPanel";
import ParticipantListPanel from "../../../components/participant/qna/ParticipantListPanel";
import TimerPanel from "../../../components/participant/qna/TimerPanel";
import QnaPhaseStatusPanel from "../../../components/participant/qna/QnaPhaseStatusPanel";
import { useTimer } from "react-timer-hook";
import { mergeQuestionLists } from "../../../utils/qna/mergeQuestions";
import { getParticipantToken } from "../../../utils/auth/tokenStorage";
import ParticipantQuestionClosedView from "../../../components/participant/qna/ParticipantQuestionClosedView";
import ParticipantVotingClosedView from "../../../components/participant/qna/ParticipantVotingClosedView";
import { questionListUiByPhase } from "../../../constants/qna/questionListUiByPhase";
import QuestionDetailModal from "../../../components/common/qna/modal/QuestionDetailModal";

const QnaParticipantPage = () => {


    const nav = useNavigate();

    const { roomNo } = useParams();

    //참여자 본인 1명의 info
    const [participantInfo, setParticipantInfo] = useState({
        nickname: ""
    });

    // 현재 접속 중인 참여자 현황
    /*
    형태:
        private Integer participantCount;
        private List<ActiveParticipantResponse> participants; // 현재 접속 중인 참여자 리스트
     */
    const [participantPresence, setParticipantPresence] = useState({
        participantCount: 0,
        participants: []
    });

    const [questions, setQuestions] = useState([]);
    const [roomInfo, setRoomInfo] = useState(null);
    const [timerInfo, setTimerInfo] = useState({
        roomNo: 0,
        status: "",
        phaseStartedAt: "",
        phaseEndedAt: ""
    });

    const clientRef = useRef(null);

    // 질문 상세 모달 표시 상태
    const [isQuestionDetailModalOpen, setIsQuestionDetailModalOpen] = useState(false);
    const [selectedQuestion,setSelectedQuestion] = useState({});

    const [whoAmI, setWhoAmI] = useState("");

    const phaseComponents = {
        READY: ParticipantReadyView,
        QUESTION_OPEN: ParticipantQuestionOpenView,
        QUESTION_CLOSED: ParticipantQuestionClosedView,
        VOTING_OPEN: ParticipantVotingOpenView,
        VOTING_CLOSED: ParticipantVotingClosedView,
        ANSWERING: ParticipantAnsweringView,
        FINISHED: ParticipantFinishedView,
    }

    const PhaseComponent = roomInfo ? phaseComponents[roomInfo.status] : null;
    const questionListUi = roomInfo
        ? questionListUiByPhase[roomInfo.status] ?? questionListUiByPhase.READY
        : questionListUiByPhase.READY;


    // HTTP 질문 등록 요청 및 완료 대기
    const handleQuestionSubmit = async (question) => {
        await createQuestion(roomNo, question);
    }

    // useTimer 라이브러리 사용
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        restart
    } = useTimer({
        expiryTimestamp: new Date(timerInfo.phaseEndedAt),
        autoStart: false,
    });

    const remainingTime = { minutes, seconds }


    // 하나의 질문 카드 클릭 시
    const handleModalOpen = (question) => {
        setIsQuestionDetailModalOpen(true);
        setSelectedQuestion(question);
    }

    //타이머 인포 useEffect
    useEffect(() => {
        if (!timerInfo?.phaseEndedAt) {
            return;
        }


        const expiryTime = new Date(timerInfo.phaseEndedAt);

        restart(expiryTime, true);

    }, [timerInfo?.phaseEndedAt, restart]);

    // 웹소켓 연결 및 구독 useEffect
    useEffect(() => {

        let disposed = false;
        const token = getParticipantToken(roomNo);

        const client = connectQnaSocket(token, async (connectedClient) => {
            if (disposed) return;
            clientRef.current = connectedClient;


            // 방 상태와 타이머 구독
            connectedClient.subscribe(`/topic/qna/${roomNo}/phase`,
                (frame) => {
                    const data = JSON.parse(frame.body);

                    setRoomInfo(prev => ({
                        ...prev,
                        status: data.status
                    }))

                    setTimerInfo(data);
                }
            )

            // 다른 참여자의 질문 구독
            connectedClient.subscribe(`/topic/qna/${roomNo}`,
                (frame) => {
                    const data = JSON.parse(frame.body);

                    setQuestions(prev => mergeQuestionLists(prev, [data]));
                }
            )

            // 참여자 리스트 구독
            connectedClient.subscribe(`/topic/qna/${roomNo}/participants`,
                (frame) => {
                    const data = JSON.parse(frame.body);

                    setParticipantPresence(data);
                }
            )

            // 결과 공개 구독
            connectedClient.subscribe(`/topic/qna/${roomNo}/result`,
                (frame) => {
                    const data = JSON.parse(frame.body);

                    setQuestions(data);
                }
            )

            // 답변 상태 변경 구독
            connectedClient.subscribe(`/topic/qna/${roomNo}/toggle`,
                (frame) => {
                    const data = JSON.parse(frame.body);
                    setQuestions(prev => prev.map((question) => question.questionNo === data.questionNo ? { ...question, status: data.status } : question));
                }
            )


            const questionListSnapshot = await getQuestionList(roomNo);
            if (disposed) return;
            setQuestions(prev => mergeQuestionLists(prev, questionListSnapshot));

            const participantPresenceSnapshot = await getParticipantPresence(roomNo);
            if (disposed) return;
            setParticipantPresence(participantPresenceSnapshot);

        }, () => {
            if (disposed) return;

            alert("현재 방의 정원이 가득 찼습니다. 잠시 후 다시 입장해주세요.");
            nav("/");
        })

        return () => {
            disposed = true;
            if (clientRef.current === client) clientRef.current = null;
            void client.deactivate();
        };

    }, [roomNo, nav])


    // roomInfo 받아오는 useEffect
    useEffect(() => {

        // 참가자 화면에 필요한 현재 Q&A 방 정보 조회(http스냅샷)
        const fetchRoomInfo = async () => {

            const data = await getParticipantQnaRoom(roomNo);
            setRoomInfo(data);

            setTimerInfo(prev => ({
                ...prev,
                status: data.status,
                phaseStartedAt: data.phaseStartedAt,
                phaseEndedAt: data.phaseEndedAt
            }))
        }

        fetchRoomInfo();

    }, [roomNo])


    //참여자 정보(참여자 본인1명)를 받아오는 useEffect(http스냅샷)
    useEffect(() => {

        const fetchParticipantInfo = async () => {
            const data = await getParticipantInfo(roomNo);
            setParticipantInfo(data);
        }

        fetchParticipantInfo();

    }, [roomNo])


    // 말모임 로고 클릭 시 메인 페이지 이동
    const handleLogoClick = () => {
        nav("/");
    }



    return (<>


        <div className="qna-participant-main-div">
            <RoomHeader title={"실시간 Q&A"} onLogoClick={handleLogoClick} />
            <div className="qna-participant__content">
                {roomInfo && <RoomSubheader roomInfo={roomInfo} />}
                <div className="qna-participant__status-row">
                    <TimerPanel remainingTime={remainingTime} />
                    <QnaPhaseStatusPanel status={roomInfo?.status} />

                </div>

                <div className="phaseComponent-parent-div">
                    <div className="phaseComponent-left-panel">
                        {PhaseComponent && <PhaseComponent
                            questions={questions}
                            roomInfo={roomInfo}
                            onQuestionSubmit={handleQuestionSubmit}
                            showRank={questionListUi.showRank}
                            showAnswerStatus={questionListUi.showAnswerStatus}
                            onClickQuestionCard={handleModalOpen}
                        />}
                    </div>
                    <div className="phaseComponent-right-panel">
                        <ParticipantInfoPanel participantInfo={participantInfo} />
                        <ParticipantListPanel participantPresence={participantPresence} />
                    </div>

                </div>
            </div>
        </div>

        <QuestionDetailModal
            selectedQuestion={selectedQuestion}
            show={isQuestionDetailModalOpen}
            onHide={() => setIsQuestionDetailModalOpen(false)}
            whoAmI={"participant"}
        />


    </>)
}

export default QnaParticipantPage;

