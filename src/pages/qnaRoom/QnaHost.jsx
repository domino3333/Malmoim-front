import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../api/room/qna/socket";


const QnaHost = () => {



    const { no } = useParams();
    console.log("no", no);
    const [question, setQuestion] = useState("");

    const clientRef = useRef(null);


    useEffect(() => {

        const client = connectWebSocket((connectedClient) => {
            clientRef.current = connectedClient;

            connectedClient.subscribe(`/topic/qna/${no}`, (frame) => {
                const data = JSON.parse(frame.body);
                console.log("구독 data:", data);
                setQuestion(question);
            });

        })

        return () => client.deactivate();

    }, [no])






    return (<>

        <h1>{no}</h1>
        <p>호스트의qna 방</p>
        <p>질문:{question}</p>
    </>)
}

export default QnaHost;
