
import { useTimer } from "react-timer-hook";
import "../../../css/host/qna/QnaRoomOverviewPanel.css"
import { useEffect } from "react";
import { updateRoomStatus } from "../../../api/qna/hostQnaApi";


const QnaRoomOverviewPanel = ({ setRoomInfo, roomInfo, timerInfo }) => {


    const defaultTime = new Date();

    //useTimer 라이브러리
    const {
        seconds,
        minutes,
        isRunning,
        restart,
        start
    } = useTimer({
        expiryTimestamp: defaultTime,
        autoStart: false,
        onExpire: async () => {
            let nextStatus;

            if (roomInfo.status === "QUESTION_OPEN") {
                nextStatus = "QUESTION_CLOSED"
            } else if (roomInfo.status === "VOTING_OPEN") {
                nextStatus = "VOTING_CLOSED"
            } else {
                return;
            }

            const data = await updateRoomStatus(roomInfo.no, nextStatus);
            setRoomInfo(prev => ({
                ...prev,
                status: data.status
            }))
        },
        interval: 1000
    });


    useEffect(() => {
        if (!timerInfo?.phaseEndedAt) return;

        const expiryTime = new Date(timerInfo.phaseEndedAt);
        restart(expiryTime, true);
    }, [timerInfo.phaseEndedAt])

    return (<>

        <div className="RoomInfo-main-div">
            <div className="timer-div">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </div>
            <div className="room-info-div">
                <div className="room-info-1">
                    입장 가능 인원: {roomInfo.capacity}
                </div>
                <div className="room-info-2">
                    비밀번호: {roomInfo.password || "없음"}
                </div>
                <div className="room-info-3">
                    상태: {roomInfo.status}
                </div>
                <div className="room-info-4">
                    타입: {roomInfo.type}
                </div>
            </div>
        </div>

    </>)
}

export default QnaRoomOverviewPanel
