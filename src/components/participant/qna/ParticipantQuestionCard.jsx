import "../../../css/participant/qna/ParticipantQuestionCard.css";

const ParticipantQuestionCard = ({ canVote = false, showVoteCount = false, showRank = false, question, onVote, isVoting = false }) => {

    return (<>


            <div className="ParticipantQuestionCard-main-parent">
                {showRank && (
                    <div className="ParticipantQuestionCard-rank-div">
                        {question.voteRank}
                    </div>
                )}

                <div className="ParticipantQuestionCard-main-div">
                    <div className="ParticipantQuestionCard-header-div">
                        <div className="ParticipantQuestionCard-nickname-div">
                            닉네임: {question.nickname}
                        </div>
                        <div className="ParticipantQuestionCard-vote-div">
                            {canVote && <button disabled={isVoting} onClick={() => onVote(question.questionNo)}>
                                {isVoting ? "처리 중..." : "좋아요"}
                            </button>}
                            {showVoteCount && <span>좋아요: {question.voteCount}</span>}
                        </div>
                    </div>
                    <div className="ParticipantQuestionCard-body-div">
                        <div className="ParticipantQuestionCard-content">
                            질문: {question.content}
                        </div>
                        <div className="ParticipantQuestionCard-time">
                            {question.createdAt}
                        </div>
                    </div>
                </div>
            </div>

    </>)
}

export default ParticipantQuestionCard;
