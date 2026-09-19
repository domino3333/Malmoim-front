

import "../../../css/host/qna/HostQuestionCard.css"
import { QuestionStatus } from "../../../utils/qna/ColumnStatus";

// 질문 내용과 작성자·추천 정보를 표시하는 카드 컴포넌트
const HostQuestionCard = ({ question, onClickCard }) => {

    return (<>

        <div className="HostQuestionCard-main-parent">
            <div className="HostQuestionCard-rank-div">
                {question.voteRank}
            </div>
            <div className="HostQuestionCard-main-div" onClick={() => onClickCard(question)}>
                <div className="HostQuestionCard-header-div">
                    <div className="HostQuestionCard-nickname-div">
                        답변상태: {QuestionStatus[question.status] ?? question.status}
                    </div>
                    <div className="HostQuestionCard-vote-div">
                        추천수: {question.voteCount}
                    </div>
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
