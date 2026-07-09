import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectWebSocket } from "../../../api/room/qna/socket";
import RoomHeader from "../../../components/host/home/room/RoomHeader";
import RoomMiniHeader from "../../../components/host/home/room/RoomMiniHeader";
import "../../../css/host/qna/QnaHostPage.css"
import RoomInfo from "../../../components/host/home/room/RoomInfo";
import HostQnaList from "../../../components/host/home/room/HostQnaList";
import QnaParticipantPannel from "../../../components/host/home/room/QnaParticipantPannel";
import RemoteControl from "../../../components/host/home/room/RemoteControl";
import { callStartTimer, getMyOneQnaRoom } from "../../../api/room/qna/qnaApi";
import TimerModal from "../../../components/host/modal/TimerModal";

const QnaHostPage = () => {



    const nav = useNavigate();
    const { no } = useParams();
    const [question, setQuestion] = useState("");
    const [roomInfo, setRoomInfo] = useState({
        no: 0,
        hostNo: 0,
        title: "",
        code: "",
        capacity: 0,
        password: "",
        createdAt: "",
        visibility: "",
        status: "",
        type: ""

    });

    const [timerInfo, setTimerInfo] = useState({
        roomNo: 0,
        status: "",
        questionStartedAt: "",
        questionEndedAt: ""
    })

    const clientRef = useRef(null);

    //TimerModal?????useState
    const [show, setShow] = useState(false);

    const clickLogo = () => {
        nav("/");
    }

    const startTimer = async (seconds) => {
        // timer start api ?몄텧
        const data = await callStartTimer(roomInfo.no, seconds);
        setTimerInfo(data);
        setRoomInfo(prev => ({
            ...prev,
            status: data.status
        }))
    }


    // ?뱀냼耳?援щ룆
    useEffect(() => {

        const client = connectWebSocket((connectedClient) => {
            clientRef.current = connectedClient;

            connectedClient.subscribe(`/topic/qna/${no}`, (frame) => {
                const data = JSON.parse(frame.body);
                console.log("援щ룆 data:", data);
                setQuestion(data.question);
            });

        })

        return () => client.deactivate();

    }, [no])

    // 諛??섎굹???뺣낫瑜?遺덈윭?ㅻ뒗 http useEffect
    useEffect(() => {

        const fetchData = async () => {
            const data = await getMyOneQnaRoom(no);
            setRoomInfo(data);
        }

        fetchData();


    }, [no])





    return (<>


        <div className="qna-host-main-div">
            <RoomHeader title={"실시간 QnA"} clickLogo={clickLogo} />
            <RoomMiniHeader roomInfo={roomInfo} />
            <RoomInfo setRoomInfo={setRoomInfo} roomInfo={roomInfo} timerInfo={timerInfo} />
            <div className="qna-host-body">
                <RemoteControl setShow={setShow} />
                <div className="qna-host-body-top">
                    <HostQnaList question={question} />
                    <QnaParticipantPannel />
                </div>

            </div>
        </div>


        <TimerModal startTimer={startTimer} show={show} onHide={() => setShow(false)} />

    </>)
}

export default QnaHostPage;

