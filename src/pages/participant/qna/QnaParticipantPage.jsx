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
    const [question, setQuestion] = useState("");
    const [roomInfo, setRoomInfo] = useState(null);

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


    // 질문 입력값의 상태 반영.
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    }


    // 현재 질문을 같은 방의 WebSocket 구독자에게 발행.
    const handleQuestionSubmit = () => {

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
        const client = connectQnaSocket((connectedClient) => {
            clientRef.current = connectedClient;


            connectedClient.subscribe(`/topic/qna/${no}/phase`,
                (frame)=>{
                    const data = JSON.parse(frame.body);

                    setRoomInfo(prev=>({
                        ...prev,
                        status:data.status
                    }))
                }
            )

        })





        return () => client.deactivate();

    }, [no])


    // roomInfo 받아오는 useEffect
    useEffect(() => {

        // 참가자 화면에 필요한 현재 Q&A 방 정보 조회.
        const fetchRoomInfo = async () => {

            const data = await getParticipantQnaRoom(no);
            setRoomInfo(data);
        }

        fetchRoomInfo();

    }, [no])


    // 말모임 로고 클릭 시 메인 페이지 이동.
    const handleLogoClick = () => {
        nav("/");
    }



    return (<>


        <div className="qna-participant-main-div">
            <RoomHeader title={"실시간 QnA"} onLogoClick={handleLogoClick} />
            {roomInfo && <RoomMiniHeader roomInfo={roomInfo} />}


            {PhaseComponent && <PhaseComponent roomInfo={roomInfo}/>}
        </div>




        {/* <input onChange={handleQuestionChange} type="text" placeholder="질문을 입력하세요" name="question" />
        <button onClick={handleQuestionSubmit}>입력</button> */}

    </>)
}

export default QnaParticipantPage;

