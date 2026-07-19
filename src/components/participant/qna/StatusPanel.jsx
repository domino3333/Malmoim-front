
import "./../../../css/participant/qna/StatusPanel.css"

const StatusPanel = ({isRunning})=>{

    return(<>
        <div className="status-panel-parent-div">
            {isRunning ? "진행 중" : "대기 중"}
        </div>
    </>)
}

export default StatusPanel; 