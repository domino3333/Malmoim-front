import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ questions }) => {

    return (<>

        <div>
            질문:{questions[0].content}
        </div>
    </>)
}

export default ParticipantQuestionCard;
