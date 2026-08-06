

import "../../../../css/host/qna/HostQuestionList.css"
import HostQuestionCard from "./HostQuestionCard";

const HostQuestionList = ({questions}) => {

    return (<>


        <div className="HostQuestionList-main-div">
            <h3>질문 리스트</h3>
            <div className="qna-toolbar-main-div">
                <div className="qna-toolbar-left-div">
                    <button>
                        전체
                    </button>
                    <button>
                        대기
                    </button>
                    <button>
                        답변 완료
                    </button>
                </div>
                <div className="qna-toolbar-right-div">
                    <select name="selectBox" id="order">
                        <option value="latest">최신순</option>
                        <option value="oldest">오래된 순</option>
                    </select>
                </div>

            </div>

            <div className="qnaList-main-div">
                {questions.map((item)=><HostQuestionCard key={item.no} question={item} />)}

            </div>

        </div >
    </>)
}

export default HostQuestionList;
