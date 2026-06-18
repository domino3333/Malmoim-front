import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import { registerQuestion } from "../../../api/room/qna/questionApi";

const QnaParticipant = () => {


    const { no } = useParams();
    const [question, setQuestion] = useState("");

    const clientRef = useRef(null);


    //input을 보는 change함수
    const observeQuestion = (e) => {

        setQuestion(e.target.value);

    }


    // 전송 클릭 시
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


    useEffect(() => {
        const client = connectWebSocket((connectedClient) => {
            clientRef.current = connectedClient;
        })


        return () => client.deactivate();

    }, [no])


    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>

        <input onChange={observeQuestion} type="text" placeholder="질문을 입력하세요." name="question" />
        <button onClick={sendQuestion}>입력</button>

    </>)
}

export default QnaParticipant;
