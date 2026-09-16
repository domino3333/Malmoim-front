

import { useState } from "react";
import "../../../css/host/qna/HostQuestionList.css"
import HostQuestionCard from "./HostQuestionCard";

const HostQuestionList = ({ questions }) => {



    const [sortedQuestions, setSortedQuestions] = useState([]);



    const handleSort = (e) => {

        const value = e.target.value;

        let list = [];

        if (value === "latest") {

            list = [...questions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        } else {

            list = [...questions].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        
        setSortedQuestions(list);
    }
    return (<>


        <div className="HostQuestionList-main-div">
            <h3>질문 리스트</h3>
            <div className="qna-toolbar-main-div">
                <div className="qna-toolbar-left-div">
                    <button className="qna-toolbar-left-btn">
                        전체
                    </button>
                    <button className="qna-toolbar-left-btn">
                        대기
                    </button>
                    <button className="qna-toolbar-left-btn">
                        답변 완료
                    </button>
                </div>
                <div className="qna-toolbar-right-div">
                    <select onChange={handleSort} name="selectBox" id="order">
                        <option value="latest" >최신순</option>
                        <option value="oldest">오래된 순</option>
                    </select>
                </div>

            </div>

            <div className="qnaList-main-div">
                {sortedQuestions.map((question) => <HostQuestionCard key={question.questionNo} question={question} />)}

            </div>

        </div >
    </>)
}

export default HostQuestionList;
