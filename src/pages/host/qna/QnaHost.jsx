import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import RoomHeader from "../../../components/host/home/room/RoomHeader";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import "../../../css/host/qna/QnaHost.css"
import RoomInfo from "../../../components/host/home/room/RoomInfo";

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


        <div className="qna-host-main-div">
            <RoomHeader title={"청중 QnA"}/>
            <RoomMiniHeader title={""} code={no} status={""}/>
            <RoomInfo/>
            <div className="qna-host-body">
                

            </div>
        </div>
    </>)
}

export default QnaHost;
