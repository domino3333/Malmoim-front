import "../../../css/participant/qna/ParticipantQuestionList.css";

const ParticipantQuestionList = ({ onClickRegister}) => {

    return (<>

        <p>질문 리스트</p>
        <button onClick={onClickRegister} className="question-left-panel-register">등록하기</button>

        
    </>)
}

export default ParticipantQuestionList;
