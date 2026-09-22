

import "../../../css/host/qna/HostQuestionCard.css"
import { QUESTION_STATUS_LABELS } from "../../../constants/qna/statusLabels";

// 질문 내용과 작성자·추천 정보를 표시하는 카드 컴포넌트
const HostQuestionCard = ({ question, onQuestionSelect, showRank,showVoteCount }) => {

    return (<>

        <div className="HostQuestionCard-main-parent">

            {showRank &&
                <div className="HostQuestionCard-rank-div">
                {question.voteRank}
            </div>
            }

            <div className="HostQuestionCard-main-div" onClick={() => onQuestionSelect(question)}>
                <div className="HostQuestionCard-header-div">
                    <div className="HostQuestionCard-nickname-div">
                        답변상태: {QUESTION_STATUS_LABELS[question.status] ?? question.status}
                    </div>
                    {showVoteCount &&
                    <div className="HostQuestionCard-vote-div">
                        추천수: {question.voteCount}
                    </div>}
                    
                </div>
                <div className="HostQuestionCard-body-div">
                    <div className="HostQuestionCard-body-question">
                        질문: {question.content}
                    </div>
                    <div className="HostQuestionCard-body-time">
                        {question.createdAt}
                    </div>
                </div>

            </div>
        </div>

    </>)
}

export default HostQuestionCard;
