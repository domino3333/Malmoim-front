import "../../../css/participant/qna/ParticipantQuestionToolbar.css";

const ParticipantQuestionToolbar = ({ onOpenQuestionModal }) => {

    return (<>

        <div className="participant-toolbar">
            <h3>질문 리스트</h3>
            <button onClick={onOpenQuestionModal} className="participant-toolbar__register">등록하기</button>
        </div>

    </>)
}

export default ParticipantQuestionToolbar;
