import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import { registerQuestion } from "../../../api/room/qna/socketApi";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import { getOneQnaRoomAsParticipant } from "../../../api/room/qna/qnaApi";

const QnaParticipantPage = () => {


    const { no } = useParams();
    const [question, setQuestion] = useState("");
    const [roomInfo,setRoomInfo] = useState();

    const clientRef = useRef(null);


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
    useEffect(()=>{

        const fetchRoomInfo = async ()=>{

            const data = await getOneQnaRoomAsParticipant(no);
            setRoomInfo(data);
        }

    },[no])






    return (<>


        <div className="qna-paricipant-main-div">
            <RoomMiniHeader roomInfo={roomInfo}/>

        </div>




        {/* <input onChange={observeQuestion} type="text" placeholder="질문을 입력하세요" name="question" />
        <button onClick={sendQuestion}>입력</button> */}

    </>)
}

export default QnaParticipantPage;

