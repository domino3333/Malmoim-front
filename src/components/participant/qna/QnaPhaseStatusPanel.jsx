import { QnaPhaseStatus } from "../../../constants/qna/statusLabels";
import "./../../../css/participant/qna/QnaPhaseStatusPanel.css"

const QnaPhaseStatusPanel = ({status})=>{

    return(<>
        <div className="status-panel-parent-div">
            {QnaPhaseStatus[status]}
        </div>
    </>)
}

export default QnaPhaseStatusPanel;
