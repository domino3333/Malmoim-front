import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ questions }) => {

    return (<>


        {questions.map((question, i) => 
            <div key={question.no} className="ParticipantQuestionCard">
                <p className="ParticipantQuestionCard-nickname">닉네임:{question.nickname}</p>
                <p className="ParticipantQuestionCard-content">{question.content}</p>
            </div>
        )}
    </>)
}

export default ParticipantQuestionCard;
