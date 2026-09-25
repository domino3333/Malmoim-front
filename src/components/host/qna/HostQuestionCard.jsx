

import "../../../css/host/qna/HostQuestionCard.css"
import { QUESTION_STATUS_LABELS } from "../../../constants/qna/statusLabels";
import { formatLocalDateTime } from "../../../utils/date/formatLocalDateTime";

// 질문 내용과 작성자·추천 정보를 표시하는 카드 컴포넌트
const HostQuestionCard = ({ question, onQuestionSelect, showRank, showVoteCount }) => {

    return (<>

        <div className="host-question-card">

            {showRank &&
                <div className="host-question-card__rank">
                    {question.voteRank}
                </div>
            }

            <div className="host-question-card__panel" onClick={() => onQuestionSelect(question)}>
                <div className="host-question-card__header">
                    <div className="host-question-card__nickname">
                        닉네임:{question.nickname}
                    </div>
                    {showVoteCount &&
                        <div className="host-question-card__votes">
                            추천수: {question.voteCount}
                        </div>}

                </div>
                <div className="host-question-card__body">
                    <div className="host-question-card__question">
                        질문: {question.content}
                    </div>
                    <div className="host-question-card__meta">
                        <div className="host-question-card__time">
                            {formatLocalDateTime(question.createdAt)}
                        </div>
                        <div className="host-question-card__status">
                            답변상태: {QUESTION_STATUS_LABELS[question.status] ?? question.status}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>)
}

export default HostQuestionCard;
