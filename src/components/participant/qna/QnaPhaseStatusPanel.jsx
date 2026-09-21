import { QNA_PHASE_LABELS } from "../../../constants/qna/statusLabels";
import "./../../../css/participant/qna/QnaPhaseStatusPanel.css"

const QnaPhaseStatusPanel = ({status})=>{

    return(<>
        <div className="status-panel-parent-div">
            {QNA_PHASE_LABELS[status]}
        </div>
    </>)
}

export default QnaPhaseStatusPanel;
