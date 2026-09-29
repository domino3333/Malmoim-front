import "../../../css/participant/qna/ParticipantQuestionCard.css";
import { formatLocalDateTime } from "../../../utils/date/formatLocalDateTime";
import { QUESTION_STATUS_LABELS } from "../../../constants/qna/statusLabels";
import PersonAvatarIcon from "../../common/PersonAvatarIcon";

const ParticipantQuestionCard = ({ canVote = false, showVoteCount = false, showRank = false, showAnswerStatus = false, question, onVote, isVoting = false, onClickQuestionCard }) => {

    return (<>


            <div className="participant-card" onClick={()=>onClickQuestionCard(question)}>
                {showRank && (
                    <div className="participant-card__rank">
                        {question.voteRank}
                    </div>
                )}

                <div className="participant-card__main">
                    <div className="participant-card__header">
                        <div className="participant-card__author">
                            <PersonAvatarIcon
                                size={20}
                                color="#755235"
                                backgroundColor="#F5EFE9"
                                className="question-detail__author-icon"
                            />
                            <p>{question.nickname}</p>
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
                            {question.content}
                        </div>
                        <div className="participant-card__meta">
                            <div className="participant-card__time">
                                {formatLocalDateTime(question.createdAt)}
                            </div>
                            {showAnswerStatus &&
                                <div className="participant-card__status">
                                    답변상태: {QUESTION_STATUS_LABELS[question.status] ?? question.status}
                                </div>}
                        </div>
                    </div>
                </div>
            </div>

    </>)
}

export default ParticipantQuestionCard;
