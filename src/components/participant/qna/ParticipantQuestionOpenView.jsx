
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import ParticipantListPanel from "../ParticipantListPanel";
import MyInfoPanel from "./MyInfoPanel";
import StatusPanel from "./StatusPanel";
import TimerPanel from "./TimerPanel";

const ParticipantQuestionOpenView = () => {

    return (<>
        <div className="Question-open-view-head">
            <TimerPanel/>
            <StatusPanel/>

        </div>
        <div className="Question-open-view-body">
            <div className="question-left-panel">
                질문 등록할 수 있는 박스
            </div>
            <div className="question-right-panel">
                <MyInfoPanel/>
                <ParticipantListPanel/>
            </div>
        </div>
    </>)
}

export default ParticipantQuestionOpenView;