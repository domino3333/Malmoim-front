import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ canVote = false, questions,onVote,roomInfo }) => {

    return (<>


        {questions.map((question, i) =>
            <div key={question.questionNo} className="ParticipantQuestionCard">
                <div className="ParticipantQuestionCard-left">
                    <p className="ParticipantQuestionCard-nickname">닉네임:{question.nickname}</p>
                    <p className="ParticipantQuestionCard-content">{question.content}</p>
                    <p className="ParticipantQuestionCard-time">{question.createdAt}</p>
                </div>
                <div className="ParticipantQuestionCard-right">
                    {canVote && <button onClick={()=>onVote(question.questionNo,roomInfo.roomNo)}>
                        좋아요
                    </button>}
                </div>

            </div>
        )}

    </>)
}

export default ParticipantQuestionCard;
