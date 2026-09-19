

import { useState } from "react";
import "../../../css/host/qna/HostQuestionList.css"
import HostQuestionCard from "./HostQuestionCard";

const HostQuestionList = ({ questions, onClickCard }) => {



    //const [sortOrder, setSortOrder] = useState("latest");
    const [statusFilter, setStatusFilter] = useState("ALL");



    // const sortedQuestions = [...questions].sort((a, b) => {
    //     const aTime = new Date(a.createdAt).getTime();
    //     const bTime = new Date(b.createdAt).getTime();
    //     return sortOrder === "latest" ? bTime - aTime : aTime - bTime;
    // })


    const waitingQuestions = [...questions].find((question)=>question.status ==="WAITING");
    const answerdQuestions = [...questions].find((question)=>question.status ==="ANSWERED");



    const filteringQuestions = ()=>{


        if(statusFilter === "WAITING"){
            return [...questions].filter((question)=>question.status ==="WAITING")
        }else if(statusFilter === "ANSWERED"){
            return [...questions].filter((question)=>question.status ==="ANSWERED")
        }else{
            return questions;
        }

    }

    const filteredQuestions = filteringQuestions();


    return (<>


        <div className="HostQuestionList-main-div">
            <h3>질문 리스트</h3>
            <div className="qna-toolbar-main-div">
                <div className="qna-toolbar-left-div">
                    <button
                        className={`qna-toolbar-left-btn ${statusFilter === "ALL" ? "isActive" : ""}`}
                        onClick={() => setStatusFilter("ALL")}
                    >
                        전체
                    </button>
                    <button
                        className={`qna-toolbar-left-btn ${statusFilter === "WAITING" ? "isActive" : ""}`}
                        onClick={() => setStatusFilter("WAITING")}>
                        대기
                    </button>
                    <button
                        className={`qna-toolbar-left-btn ${statusFilter === "ANSWERED" ? "isActive" : ""}`}
                        onClick={() => setStatusFilter("ANSWERED")}>
                        답변 완료
                    </button>
                </div>
                <div className="qna-toolbar-right-div">
                    {/* <select onChange={(e) => setSortOrder(e.target.value)} name="selectBox" id="order">
                        <option value="latest" >최신순</option>
                        <option value="oldest">오래된 순</option>
                    </select> */}
                </div>

            </div>

            <div className="qnaList-main-div">
                {filteredQuestions.map((question) => <HostQuestionCard onClickCard={onClickCard} key={question.questionNo} question={question} />)}

            </div>

        </div >
    </>)
}

export default HostQuestionList;
