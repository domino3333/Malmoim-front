import { useTimer } from "react-timer-hook"
import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ timerTime }) => {





    return (<>

        <div className="timer-panel-parent-div">
            <p>
                {String(timerTime.minutes).padStart(2, "0")}:
                {String(timerTime.seconds).padStart(2, "0")}
            </p>
        </div>


    </>)
}

export default TimerPanel;