import "../../../css/participant/qna/ParticipantQuestionToolbar.css";

const ParticipantQuestionToolbar = ({ onOpenQuestionModal }) => {

    return (<>

        <div className="ParticipantQuestionToolbar-parent-div">
            <p>질문 리스트</p>
            <button onClick={onOpenQuestionModal} className="ParticipantQuestionToolbar-register-button">등록하기</button>
        </div>

    </>)
}

export default ParticipantQuestionToolbar;
