import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import RoomHeader from "../../../components/host/home/room/RoomHeader";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import "../../../css/host/qna/QnaHost.css"
import RoomInfo from "../../../components/host/home/room/RoomInfo";
import HostQnaList from "../../../components/host/home/room/HostQnaList";
import QnaParticipantPannel from "../../../components/host/home/room/QnaParticipantPannel";
import RemoteControl from "../../../components/host/home/room/RemoteControl";
import { getMyOneQnaRoom } from "../../../api/room/qna/qnaApi";
import TimerModal from "../../../components/host/modal/TimerModal";

const QnaHost = () => {



    const { no } = useParams();
    const [question, setQuestion] = useState("");
    const [roomInfo, setRoomInfo] = useState({
        no:0,
        hostNo:0,
        title:"",
        code:"",
        capacity:0,
        password:"",
        createdAt:"",
        visibility:"",
        type:""

    });



    const clientRef = useRef(null);

    //TimerModal에 대한 useState
    const [show, setShow] = useState(false);
    const [totalSecond,setTotalSecond] =useState(0);

    const startTimer = (seconds)=>{
        setTotalSecond(seconds);
    }


    // 웹소켓 구독
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

    // 방 하나의 정보를 불러오는 http useEffect
    useEffect(()=>{

        const fetchData = async ()=>{
            const data = await getMyOneQnaRoom(no);
            setRoomInfo(data);
        }

        fetchData();

        
    },[no])





    return (<>


        <div className="qna-host-main-div">
            <RoomHeader title={"청중 QnA"} />
            <RoomMiniHeader roomInfo={roomInfo} />
            <RoomInfo />
            <div className="qna-host-body">
                <RemoteControl setShow={setShow} />
                <div className="qna-host-body-top">
                    <HostQnaList question={question}/>
                    <QnaParticipantPannel />
                </div>

            </div>
        </div>


        <TimerModal startTimer={startTimer} show={show} onHide={()=>setShow(false)}/>

    </>)
}

export default QnaHost;
