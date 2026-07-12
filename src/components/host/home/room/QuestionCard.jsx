

import "../../../../css/host/qna/QuestionCard.css"

// 질문 내용과 작성자·추천 정보를 표시하는 카드 컴포넌트.
const QuestionCard = ({question})=>{

    return(<>
        <div className="QuestionCard-main-div">
            <div className="QuestionCard-header-div">
                <div className="QuestionCard-nickname-div">
                    닉네임
                </div>
                <div className="QuestionCard-vote-div">
                    추천수:33
                </div>
            </div>
            <div className="QuestionCard-body-div">
                <div>
                    {question}
                </div>
            </div>

        </div>
    </>)
}

export default QuestionCard;
