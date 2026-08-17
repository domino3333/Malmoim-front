import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connectQnaSocket } from "../../../api/qna/qnaSocket";
import RoomHeader from "../../../components/common/room/RoomHeader";
import RoomSubheader from "../../../components/common/room/RoomSubheader";
import "../../../css/host/qna/QnaHostPage.css"
import RoomInfo from "../../../components/host/qna/RoomInfo";
import HostQuestionList from "../../../components/host/qna/HostQuestionList";
import QnaParticipantPanel from "../../../components/host/qna/QnaParticipantPanel";
import QnaControlPanel from "../../../components/host/qna/QnaControlPanel";
import { getHostQnaRoom, getParticipantList, startQuestionPhase } from "../../../api/qna/hostQnaApi";
import TimerModal from "../../../components/host/qna/modal/TimerModal";

const QnaHostPage = () => {



    const nav = useNavigate();
    const { no } = useParams();
    const [questions, setQuestions] = useState([]);
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

    const [participantList, setParticipantList] = useState({
        participantCount:0,
        participants:[]
    });

    const [timerInfo, setTimerInfo] = useState({
        roomNo: 0,
        status: "",
        questionStartedAt: "",
        questionEndedAt: ""
    })

    const clientRef = useRef(null);

    // TimerModal 표시 상태
    const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);

    // 말모임 로고 클릭 시 메인 페이지 이동
    const handleLogoClick = () => {
        nav("/");
    }

    // 질문 접수 시작 요청 및 타이머·방 상태 갱신
    const handleStartQuestionPhase = async (seconds) => {
        // timer start api 호출
        const data = await startQuestionPhase(roomInfo.no, seconds);
        setTimerInfo(data);
        setRoomInfo(prev => ({
            ...prev,
            status: data.status
        }))
    }


    // 웹소켓 구독
    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');

        const client = connectQnaSocket(token, async (connectedClient) => {


            clientRef.current = connectedClient;

            connectedClient.subscribe(`/topic/qna/${no}`, (frame) => {
                const data = JSON.parse(frame.body);
                setQuestions(prev => [...prev, data]);
            });

            connectedClient.subscribe(`/topic/qna/${no}/participants`, (frame) => {
                const data = JSON.parse(frame.body);
                setParticipantList(data);
            });

            const particiapantListSnapshot = await getParticipantList(no);
            setParticipantList(particiapantListSnapshot);

        })

        return () => client.deactivate();

    }, [no])

    // 방 하나의 정보를 불러오는 http useEffect
    useEffect(() => {

        // 호스트가 소유한 현재 Q&A 방 정보 조회
        const fetchRoomInfo = async () => {
            const data = await getHostQnaRoom(no);
            setRoomInfo(data);
        }

        fetchRoomInfo();


    }, [no])





    return (<>


        <div className="qna-host-main-div">
            <RoomHeader title={"실시간 Q&A"} onLogoClick={handleLogoClick} />
            <RoomSubheader roomInfo={roomInfo} />
            <RoomInfo setRoomInfo={setRoomInfo} roomInfo={roomInfo} timerInfo={timerInfo} />
            <div className="qna-host-body">
                <QnaControlPanel onOpenTimerModal={() => setIsTimerModalOpen(true)} />
                <div className="qna-host-body-top">
                    <HostQuestionList questions={questions} />
                    <QnaParticipantPanel />
                </div>

            </div>
        </div>


        <TimerModal startTimer={handleStartQuestionPhase} show={isTimerModalOpen} onHide={() => setIsTimerModalOpen(false)} />

    </>)
}

export default QnaHostPage;

