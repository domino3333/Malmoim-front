import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import { registerQuestion } from "../../../api/room/qna/socketApi";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import { getOneQnaRoomAsParticipant } from "../../../api/room/qna/qnaApi";
import "../../../css/participant/qna/QnaParticipantPage.css"
import RoomHeader from "../../../components/host/home/room/RoomHeader";
import ParticipantReadyView from "../../../components/participant/qna/ParticipantReadyView";

const QnaParticipantPage = () => {


    const nav = useNavigate();

    const { no } = useParams();
    const [question, setQuestion] = useState("");
    const [roomInfo, setRoomInfo] = useState(null);

    const clientRef = useRef(null);


    const phaseComponents = {
        READY:ParticipantReadyView,
        QUESTION_OPEN:ParticipantQuestionOpenView,
        VOTING_OPEN:ParticipantVotingOpenView,
        ANSWERING:ParticipantAnsweringView,
        FINISHED:ParticipantFinishedView,
    }

    const PhaseComponent = phaseComponents[roomInfo.status];


    const observeQuestion = (e) => {
        setQuestion(e.target.value);
    }


    const sendQuestion = () => {

        const client = clientRef.current;

        if (!client || !client.connected) {
            return;
        }

        registerQuestion(client, {
            roomNo: Number(no),
            question: question
        });
    }


    // 웹소켓 연결 useEffect
    useEffect(() => {
        const client = connectWebSocket((connectedClient) => {
            clientRef.current = connectedClient;
        })


        return () => client.deactivate();

    }, [no])


    // roomInfo 받아오는 useEffect
    useEffect(() => {

        const fetchRoomInfo = async () => {

            const data = await getOneQnaRoomAsParticipant(no);
            setRoomInfo(data);
        }

        fetchRoomInfo();

    }, [no])


    const clickLogo = () => {
        nav("/");
    }



    return (<>


        <div className="qna-paricipant-main-div">
            <RoomHeader title={"실시간 QnA"} clickLogo={clickLogo} />
            {roomInfo ? <RoomMiniHeader roomInfo={roomInfo} /> : <div>로딩중</div>}

            <PhaseComponent/>
        </div>




        {/* <input onChange={observeQuestion} type="text" placeholder="질문을 입력하세요" name="question" />
        <button onClick={sendQuestion}>입력</button> */}

    </>)
}

export default QnaParticipantPage;

