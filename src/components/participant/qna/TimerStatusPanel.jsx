
import { QnaPhaseStatus } from "../../../constants/qna/statusLabels";
import "./../../../css/participant/qna/TimerStatusPanel.css"

const TimerStatusPanel = ({status})=>{

    return(<>
        <div className="status-panel-parent-div">
            {QnaPhaseStatus[status]}
        </div>
    </>)
}

export default TimerStatusPanel; 
