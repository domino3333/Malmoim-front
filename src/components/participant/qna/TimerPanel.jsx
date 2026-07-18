import { useTimer } from "react-timer-hook"
import "./../../../css/participant/qna/TimerPanel.css"
import { useEffect } from "react"


const TimerPanel = ({ timerInfo }) => {


    


    useEffect(() => {
        if (!timerInfo?.questionEndedAt) {
            return;
        }

        const expiryTime = new Date(timerInfo.questionEndedAt);

        restart(expiryTime, true);

    }, [timerInfo?.questionEndedAt]);



    return (<>

        <div className="timer-panel-parent-div">
            <p>
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </p>
        </div>


    </>)
}

export default TimerPanel;