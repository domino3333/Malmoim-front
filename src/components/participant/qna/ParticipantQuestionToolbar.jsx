import "../../../css/participant/qna/ParticipantQuestionToolbar.css";

const ParticipantQuestionToolbar = ({ onOpenQuestionModal }) => {

    return (<>

        <div className="ParticipantQuestionToolbar-parent-div">
            <h3>질문 리스트</h3>
            <button onClick={onOpenQuestionModal} className="ParticipantQuestionToolbar-register-button">등록하기</button>
        </div>

    </>)
}

export default ParticipantQuestionToolbar;
