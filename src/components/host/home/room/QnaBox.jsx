

import "../../../../css/host/qna/QnaBox.css"

const QnaBox = ()=>{

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
                    질문내용 한줄...으로 텍스트 가리기
                </div>
            </div>

        </div>
    </>)
}

export default QnaBox;
