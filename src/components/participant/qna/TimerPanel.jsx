import { useTimer } from "react-timer-hook"
import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ minutes,seconds }) => {





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