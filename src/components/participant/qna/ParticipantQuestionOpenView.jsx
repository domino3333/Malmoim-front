
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import ParticipantListPanel from "../ParticipantListPanel";
import MyInfoPanel from "./MyInfoPanel";
import StatusPanel from "./StatusPanel";
import TimerPanel from "./TimerPanel";

const ParticipantQuestionOpenView = ({timerInfo}) => {

    return (<>
        <div className="Question-open-view-head">
            <TimerPanel timerInfo={timerInfo}/>
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


        {/* 여기서 버튼 누르면 모달이 나와야 함 */}
    </>)
}

export default ParticipantQuestionOpenView;