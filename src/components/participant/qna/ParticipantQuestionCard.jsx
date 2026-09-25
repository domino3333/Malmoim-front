import "../../../css/participant/qna/ParticipantQuestionCard.css";
import { formatLocalDateTime } from "../../../utils/date/formatLocalDateTime";

const ParticipantQuestionCard = ({ canVote = false, showVoteCount = false, showRank = false, question, onVote, isVoting = false }) => {

    return (<>


            <div className="participant-card">
                {showRank && (
                    <div className="participant-card__rank">
                        {question.voteRank}
                    </div>
                )}

                <div className="participant-card__main">
                    <div className="participant-card__header">
                        <div className="participant-card__author">
                            닉네임: {question.nickname}
                        </div>
                        <div className="participant-card__vote">
                            {canVote && <button disabled={isVoting} onClick={() => onVote(question.questionNo)}>
                                {isVoting ? "처리 중..." : "좋아요"}
                            </button>}
                            {showVoteCount && <span>좋아요: {question.voteCount}</span>}
                        </div>
                    </div>
                    <div className="participant-card__body">
                        <div className="participant-card__content">
                            질문: {question.content}
                        </div>
                        <div className="participant-card__time">
                            {formatLocalDateTime(question.createdAt)}
                        </div>
                    </div>
                </div>
            </div>

    </>)
}

export default ParticipantQuestionCard;
