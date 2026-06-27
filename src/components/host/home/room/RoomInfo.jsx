
import { useTimer } from "react-timer-hook";
import "../../../../css/host/home/room/RoomInfo.css"
import { useEffect } from "react";


const RoomInfo = ({ roomInfo, timerInfo }) => {


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
        onExpire: () => {
            console.log("타이머 종료")
        },
        interval: 1000,
    });


    useEffect(() => {
        if (!timerInfo?.questionEndedAt) return;

        const expiryTime = new Date(timerInfo.questionEndedAt);
        restart(expiryTime, true);
    }, [timerInfo.questionEndedAt])

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

export default RoomInfo
