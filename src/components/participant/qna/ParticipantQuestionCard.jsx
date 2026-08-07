import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ questions }) => {

    return (<>

        <div className="ParticipantQuestionCard-list">

            {questions.map((question, i) =>
                <div key={question.no} className="ParticipantQuestionCard">
                    <p className="ParticipantQuestionCard-nickname">닉네임:{question.nickname}</p>
                    <p className="ParticipantQuestionCard-content">{question.content}</p>
                    <p className="ParticipantQuestionCard-time">{question.createdAt}</p>
                    
                </div>
            )}

        </div>
    </>)
}

export default ParticipantQuestionCard;
