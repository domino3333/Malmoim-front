
import { useTimer } from "react-timer-hook";
import "../../../../css/host/home/room/RoomInfo.css"
import { useEffect } from "react";


const RoomInfo = ({ timerInfo }) => {


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
                {String(minutes).padStart(2,"0")}:
                {String(seconds).padStart(2,"0")}
            </div>
            <div className="room-info-div">
                <div className="room-info-1">
                    방 정보1
                </div>
                <div className="room-info-2">
                    방 정보2
                </div>
                <div className="room-info-3">
                    방 정보3
                </div>
            </div>
        </div>

    </>)
}

export default RoomInfo
