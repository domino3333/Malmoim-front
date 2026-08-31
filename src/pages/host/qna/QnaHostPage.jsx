import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectQnaSocket } from "../../../api/qna/qnaSocket";
import RoomHeader from "../../../components/common/room/RoomHeader";
import RoomSubheader from "../../../components/common/room/RoomSubheader";
import "../../../css/host/qna/QnaHostPage.css"
import QnaRoomOverviewPanel from "../../../components/host/qna/QnaRoomOverviewPanel";
import HostQuestionList from "../../../components/host/qna/HostQuestionList";
import HostParticipantPanel from "../../../components/host/qna/HostParticipantPanel";
import QnaControlPanel from "../../../components/host/qna/QnaControlPanel";
import { getHostQnaRoom, getParticipantList, getQuestionList, startAnsweringPhase, startQuestionPhase, startVotingPhase } from "../../../api/qna/hostQnaApi";
import TimerModal from "../../../components/host/qna/modal/TimerModal";
import { mergeQuestionLists } from "../../../utils/qna/mergeQuestions";

const QnaHostPage = () => {



    const nav = useNavigate();
    const { roomNo } = useParams();
    const [questions, setQuestions] = useState([]);
    const [roomInfo, setRoomInfo] = useState({
        roomNo: 0,
        hostNo: 0,
        title: "",
        code: "",
        capacity: 0,
        password: "",
        createdAt: "",
        visibility: "",
        status: "",
        type: ""

    });

    const [participantList, setParticipantList] = useState({
        participantCount: 0,
        participants: []
    });

    const [timerInfo, setTimerInfo] = useState({
        roomNo: 0,
        status: "",
        phaseStartedAt: "",
        phaseEndedAt: ""
    })

    const clientRef = useRef(null);

    // TimerModal 표시 상태
    const [isQuestionTimerOpen, setIsQuestionTimerOpen] = useState(false);
    const [isVotingTimerOpen, setIsVotingTimerOpen] = useState(false);

    // 말모임 로고 클릭 시 메인 페이지 이동
    const handleLogoClick = () => {
        nav("/");
    }

    // 질문 접수 시작 요청 및 타이머·방 상태 갱신
    const handleStartQuestionPhase = async (seconds) => {
        // timer start api 호출
        const data = await startQuestionPhase(roomInfo.roomNo, seconds);
        setTimerInfo(data);
        setRoomInfo(prev => ({
            ...prev,
            status: data.status
        }))
    }

    //투표 시작 요청
    const handleStartVotingPhase = async (seconds) => {

        const data = await startVotingPhase(roomInfo.roomNo, seconds);
        setTimerInfo(data);
        setRoomInfo(prev => ({
            ...prev,
            status: data.status
        }))
    }

    //결과 공개 화면 phase로 바꾸도록 요청
    const handleRevealResults = async () => {
        const data = await startAnsweringPhase(roomInfo.roomNo);
        setRoomInfo(prev => ({
            ...prev,
            status: data.status

        }))
    }


    // 웹소켓 구독
    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');

        const client = connectQnaSocket(token, async (connectedClient) => {


            clientRef.current = connectedClient;

            connectedClient.subscribe(`/topic/qna/${roomNo}`, (frame) => {
                const data = JSON.parse(frame.body);
                setQuestions(prev => mergeQuestionLists(prev, [data]));
            });

            connectedClient.subscribe(`/topic/qna/${roomNo}/participants`, (frame) => {
                const data = JSON.parse(frame.body);
                setParticipantList(data);
            });

            const questionListSnapshot = await getQuestionList(roomNo);
            setQuestions(prev => mergeQuestionLists(questionListSnapshot, prev));

            const participantListSnapshot = await getParticipantList(roomNo);
            setParticipantList(participantListSnapshot);


        })

        return () => client.deactivate();

    }, [roomNo])

    // 방 하나의 정보를 불러오는 http useEffect
    useEffect(() => {

        // 호스트가 소유한 현재 Q&A 방 정보 조회
        const fetchRoomInfo = async () => {
            const data = await getHostQnaRoom(roomNo);
            setRoomInfo(data);
        }

        fetchRoomInfo();


    }, [roomNo])


    return (<>


        <div className="qna-host-main-div">
            <RoomHeader title={"실시간 Q&A"} onLogoClick={handleLogoClick} />
            <RoomSubheader roomInfo={roomInfo} />
            <QnaRoomOverviewPanel setRoomInfo={setRoomInfo} roomInfo={roomInfo} timerInfo={timerInfo} />
            <div className="qna-host-body">
                <QnaControlPanel
                    onOpenQuestionTimerModal={() => setIsQuestionTimerOpen(true)}
                    onOpenVotingTimerModal={() => setIsVotingTimerOpen(true)}
                    onRevealResults={() => handleRevealResults()}

                />
                <div className="qna-host-body-top">
                    <HostQuestionList questions={questions} />
                    <HostParticipantPanel participantList={participantList} />
                </div>

            </div>
        </div>


        <TimerModal
            title={"질문 시간 설정"}
            description={"참여자가 질문을 작성할 수 있는 제한 시간을 정해주세요."}
            startTimer={handleStartQuestionPhase}
            show={isQuestionTimerOpen}
            onHide={() => setIsQuestionTimerOpen(false)} />

        <TimerModal
            title={"투표 시간 설정"}
            description={"참여자가 투표할 수 있는 제한 시간을 정해주세요."}
            startTimer={handleStartVotingPhase}
            show={isVotingTimerOpen}
            onHide={() => setIsVotingTimerOpen(false)} />

    </>)
}

export default QnaHostPage;

