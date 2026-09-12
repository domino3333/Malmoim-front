
import "./../../../css/participant/qna/TimerStatusPanel.css"

const TimerStatusPanel = ({isRunning})=>{

    return(<>
        <div className="status-panel-parent-div">
            {isRunning ? "진행 중" : "대기 중"}
        </div>
    </>)
}

export default TimerStatusPanel; 
