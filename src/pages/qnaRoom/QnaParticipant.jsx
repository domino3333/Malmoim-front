import { Client } from "@stomp/stompjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const QnaParticipant = () => {


    const { no } = useParams();
    const [msg, setMsg] = useState("");


    useEffect(() => {
        const client = new Client({
            webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
            reconnectDelay: 5000,
            debug: () => { },
        });

        client.onConnect = ()=>{
            client.subscribe(`/topic/qna/${no}`,(frame)=>{
                const data = JSON.parse(frame.body);
                setMsg(data.message);
            });
        };

        client.activate();

        return ()=> client.deactivate();

    }, [no])




    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>
        <h3>{msg}</h3>
    </>)
}

export default QnaParticipant;