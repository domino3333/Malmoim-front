import { Client } from "@stomp/stompjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connectQnaSocket } from "../../api/room/qna/socket";

const QnaParticipant = () => {


    const { no } = useParams();
    const [msg, setMsg] = useState("");


    useEffect(() => {
        const client = connectQnaSocket((connectedClient) => {
            connectedClient.subscribe(`/topic/qna/${no}`, (frame) => {
                const data = JSON.parse(frame.body);
                console.log("받은 메시지:", data);
                setMsg(data.message);
            });
        });

        client.activate();

        return () => client.deactivate();

    }, [no])




    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>
        <h3>{msg}</h3>
    </>)
}

export default QnaParticipant;