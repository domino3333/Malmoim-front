
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import StatusPanel from "./StatusPanel";
import TimerPanel from "./TimerPanel";

const ParticipantQuestionOpenView = () => {

    return (<>
        <div className="Question-open-view-head">
            <TimerPanel/>
            <StatusPanel/>
        </div>
    </>)
}

export default ParticipantQuestionOpenView;