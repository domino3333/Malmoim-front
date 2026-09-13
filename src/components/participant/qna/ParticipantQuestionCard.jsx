import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ canVote = false, showVoteCount = false, question, onVote, isVoting = false }) => {

    return (<>


            <div className="ParticipantQuestionCard">
                <div className="ParticipantQuestionCard-left">
                    <p className="ParticipantQuestionCard-nickname">닉네임:{question.nickname}</p>
                    <p className="ParticipantQuestionCard-content">{question.content}</p>
                    <p className="ParticipantQuestionCard-time">{question.createdAt}</p>
                </div>
                <div className="ParticipantQuestionCard-right">
                    {canVote && <button disabled={isVoting} onClick={() => onVote(question.questionNo)}>
                        {isVoting ? "처리 중..." : "좋아요"}
                    </button>}
                    {showVoteCount && <p>좋아요:{question.voteCount}</p>}
                    
                </div>

            </div>

    </>)
}

export default ParticipantQuestionCard;
