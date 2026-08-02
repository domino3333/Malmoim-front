import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectQnaSocket } from "../../../api/room/qna/socket";
import { publishQuestion } from "../../../api/room/qna/socketApi";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import { getParticipantQnaRoom } from "../../../api/room/qna/qnaApi";
import "../../../css/participant/qna/QnaParticipantPage.css"
import RoomHeader from "../../../components/host/home/room/RoomHeader";
import ParticipantReadyView from "../../../components/participant/qna/ParticipantReadyView";
import ParticipantQuestionOpenView from "../../../components/participant/qna/ParticipantQuestionOpenView";
import ParticipantVotingOpenView from "../../../components/participant/qna/ParticipantVotingOpenView";
import ParticipantAnsweringView from "../../../components/participant/qna/ParticipantAnsweringView";
import ParticipantFinishedView from "../../../components/participant/qna/ParticipantFinishedView";

const QnaParticipantPage = () => {


    const nav = useNavigate();

    const { no } = useParams();
    const [question, setQuestion] = useState([]);
    const [roomInfo, setRoomInfo] = useState(null);
    const [timerInfo, setTimerInfo] = useState({
        roomNo: 0,
        status: "",
        questionStartedAt: "",
        questionEndedAt: ""
    });

    const clientRef = useRef(null);


    // 화면 별 view에 대한 맵
    const phaseComponents = {
        READY: ParticipantReadyView,
        QUESTION_OPEN: ParticipantQuestionOpenView,
        VOTING_OPEN: ParticipantVotingOpenView,
        ANSWERING: ParticipantAnsweringView,
        FINISHED: ParticipantFinishedView,
    }

    const PhaseComponent = roomInfo ? phaseComponents[roomInfo.status] : null;


    // 현재 질문을 같은 방의 WebSocket 구독자에게 발행
    const handleQuestionSubmit = (question) => {

        const client = clientRef.current;

        if (!client || !client.connected) {
            return;
        }

        publishQuestion(client, {
            roomNo: Number(no),
            question: question
        });
    }


    // 웹소켓 연결 useEffect
    useEffect(() => {

        const token = sessionStorage.getItem(
            `malmoim:participant-session:${no}`
        );

        const client = connectQnaSocket(token, (connectedClient) => {
            clientRef.current = connectedClient;


            // 타이머 구독
            connectedClient.subscribe(`/topic/qna/${no}/phase`,
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
            connectedClient.subscribe(`/topic/qna/${no}`,
                (frame) => {
                    const data = JSON.parse(frame.body);

                    setQuestion(prev => [...prev, data]);
                }
            )

        })

        return () => client.deactivate();

    }, [no])


    // roomInfo 받아오는 useEffect
    useEffect(() => {

        // 참가자 화면에 필요한 현재 Q&A 방 정보 조회
        //일단 여기선 question시작/종료 시간을 안 줌
        const fetchRoomInfo = async () => {

            const data = await getParticipantQnaRoom(no);
            setRoomInfo(data);
        }

        fetchRoomInfo();

    }, [no])


    // 말모임 로고 클릭 시 메인 페이지 이동
    const handleLogoClick = () => {
        nav("/");
    }



    return (<>


        <div className="qna-participant-main-div">
            <RoomHeader title={"실시간 Q&A"} onLogoClick={handleLogoClick} />
            {roomInfo && <RoomMiniHeader roomInfo={roomInfo} />}


            {PhaseComponent && <PhaseComponent roomInfo={roomInfo} timerInfo={timerInfo} onQuestionSubmit={handleQuestionSubmit} />}
        </div>



    </>)
}

export default QnaParticipantPage;

