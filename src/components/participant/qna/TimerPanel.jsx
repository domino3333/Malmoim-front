import { useTimer } from "react-timer-hook"
import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ remainingTime }) => {





    return (<>

        <div className="timer-panel-parent-div">
            <p>
                {String(remainingTime.minutes).padStart(2, "0")}:
                {String(remainingTime.seconds).padStart(2, "0")}
            </p>
        </div>


    </>)
}

export default TimerPanel;
