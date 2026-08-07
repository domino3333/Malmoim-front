import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ questions }) => {

    return (<>


        {questions.map((question, i) => 
            <div key={question.no}>
                질문:{i}, {question.content}
            </div>
        )}
    </>)
}

export default ParticipantQuestionCard;
