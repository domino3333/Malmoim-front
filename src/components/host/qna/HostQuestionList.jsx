

import { useState } from "react";
import "../../../css/host/qna/HostQuestionList.css"
import HostQuestionCard from "./HostQuestionCard";

const HostQuestionList = ({ questions, onClickCard, ui }) => {



    const [statusFilter, setStatusFilter] = useState("ALL");


    const waitingQuestions = [...questions].find((question) => question.status === "WAITING");
    const answerdQuestions = [...questions].find((question) => question.status === "ANSWERED");



    const filteringQuestions = () => {


        if (statusFilter === "WAITING") {
            return [...questions].filter((question) => question.status === "WAITING")
        } else if (statusFilter === "ANSWERED") {
            return [...questions].filter((question) => question.status === "ANSWERED")
        } else {
            return questions;
        }

    }

    const filteredQuestions = filteringQuestions();


    return (<>


        <div className="HostQuestionList-main-div">
            <h3>질문 리스트</h3>
            {ui.showStatusFilter &&
            
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

                </div>

            </div>}



            <div className="qnaList-main-div">
                {filteredQuestions.map((question) => <HostQuestionCard onClickCard={onClickCard} key={question.questionNo} question={question} showRank={ui.showRank} />)}

            </div>

        </div >
    </>)
}

export default HostQuestionList;
