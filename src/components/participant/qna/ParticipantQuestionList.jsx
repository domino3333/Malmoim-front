import "../../../css/participant/qna/ParticipantQuestionList.css";
import QuestionSubmitModal from "./modal/QuestionSubmitModal";

const ParticipantQuestionList = ({ onClickRegister, show, onHide, onSubmit }) => {

    return (<>

        <p>질문 리스트</p>
        <button onClick={onClickRegister} className="question-left-panel-register">등록하기</button>

        {show &&
            <QuestionSubmitModal show={show} onHide={onHide} onSubmit={onSubmit}/>
        }
    </>)
}

export default ParticipantQuestionList;
