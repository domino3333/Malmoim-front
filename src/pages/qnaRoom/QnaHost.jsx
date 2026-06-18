import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../api/room/qna/socket";
import QnaRoomHeader from "../../components/dashboard/room/RoomHeader";


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
            <QnaRoomHeader title={"청중 QnA"}/>
        </div>
    </>)
}

export default QnaHost;
