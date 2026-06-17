import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../api/room/qna/socket";

const QnaParticipant = () => {


    const { no } = useParams();


    const [msg, setMsg] = useState("");




    useEffect(() => {
        const client = connectWebSocket(
            () => {
                client.subscribe(`/topic/qna/${no}`, (frame) => {
                    const data = JSON.parse(frame.body);
                    setMsg(data.message);
                })
            }
        );

        return () => client.deactivate();
    }, [])


    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>
        <h3>{msg}</h3>
    </>)
}

export default QnaParticipant;
