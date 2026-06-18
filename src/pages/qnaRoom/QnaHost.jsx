import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../api/room/qna/socket";
import RoomHeader from "../../components/dashboard/room/RoomHeader";
import "../../css/dashboard/room/qna/QnaHost.css"

const QnaHost = () => {



    const { no } = useParams();
    const [question, setQuestion] = useState("");
    const clientRef = useRef(null);


    useEffect(() => {

        const client = connectWebSocket((connectedClient) => {
            clientRef.current = connectedClient;

            connectedClient.subscribe(`/topic/qna/${no}`, (frame) => {
                const data = JSON.parse(frame.body);
                console.log("구독 data:", data);
                setQuestion(data.question);
            });

        })

        return () => client.deactivate();

    }, [no])






    return (<>


        <div className="qna_host_main_div">
            <RoomHeader title={"청중 QnA"}/>
            <RoomMiniHeader title={} code={} status={}/>
        </div>
    </>)
}

export default QnaHost;
