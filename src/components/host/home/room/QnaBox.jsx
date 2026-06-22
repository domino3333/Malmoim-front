

import "../../../../css/host/qna/QnaBox.css"

const QnaBox = ({question})=>{

    return(<>
        <div className="QnaBox-main-div">
            <div className="QnaBox-header-div">
                <div className="QnaBox-nickname-div">
                    닉네임
                </div>
                <div className="QnaBox-vote-div">
                    추천수:33
                </div>
            </div>
            <div className="QnaBox-body-div">
                <div>
                    {question}
                </div>
            </div>

        </div>
    </>)
}

export default QnaBox;
