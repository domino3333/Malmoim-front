import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import { registerQuestion } from "../../../api/room/qna/socketApi";

const QnaParticipantPage = () => {


    const { no } = useParams();
    const [question, setQuestion] = useState("");

    const clientRef = useRef(null);


    //input??蹂대뒗 change?⑥닔
    const observeQuestion = (e) => {

        setQuestion(e.target.value);

    }


    // ?꾩넚 ?대┃ ??
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
        <p>참여자의 qna 방</p>

        <input onChange={observeQuestion} type="text" placeholder="질문을 입력하세요" name="question" />
        <button onClick={sendQuestion}>입력</button>

    </>)
}

export default QnaParticipantPage;

