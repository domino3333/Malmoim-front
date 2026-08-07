

import "../../../../css/host/qna/HostQuestionCard.css"

// 질문 내용과 작성자·추천 정보를 표시하는 카드 컴포넌트
const HostQuestionCard = ({question})=>{

    return(<>
        <div className="HostQuestionCard-main-div">
            <div className="HostQuestionCard-header-div">
                <div className="HostQuestionCard-nickname-div">
                    닉네임: {question.nickname}
                </div>
                <div className="HostQuestionCard-vote-div">
                    추천수: {question.voteCount}
                </div>
            </div>
            <div className="HostQuestionCard-body-div">
                <div>
                    질문: {question.content}
                </div>
            </div>

        </div>
    </>)
}

export default HostQuestionCard;
