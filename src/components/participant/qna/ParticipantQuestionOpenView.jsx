
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
                <h3>질문을 등록해주세요!</h3>
                <button className="question-left-panel-register"> 등록하기 </button>
            </div>
            <div className="question-right-panel">
                <MyInfoPanel/>
                <ParticipantListPanel/>
            </div>
        </div>
    </>)
}

export default ParticipantQuestionOpenView;