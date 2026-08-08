
import { useTimer } from "react-timer-hook";
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import ParticipantListPanel from "../ParticipantListPanel";
import MyInfoPanel from "./MyInfoPanel";
import StatusPanel from "./StatusPanel";
import TimerPanel from "./TimerPanel";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import QuestionSubmitModal from "./modal/QuestionSubmitModal";
import ParticipantQuestionToolbar from "./ParticipantQuestionToolbar";
import ParticipantQuestionCard from "./ParticipantQuestionCard";

const ParticipantQuestionOpenView = ({ timerInfo, onQuestionSubmit, questions }) => {



    //todo 참여자의 정보 받아오기


    const [questionSubmitModalShow, setQuestionSubmitModalShow] = useState(false);






    return (<>

        <div className="Question-open-view-body">
            <div className="question-left-panel">
                <ParticipantQuestionToolbar onOpenQuestionModal={() => setQuestionSubmitModalShow(true)} />
                <ParticipantQuestionCard questions={questions}/>
            </div>
        </div>

        {questionSubmitModalShow &&
            <QuestionSubmitModal show={questionSubmitModalShow} onHide={() => setQuestionSubmitModalShow(false)} onSubmit={onQuestionSubmit} />
        }




    </>)
}

export default ParticipantQuestionOpenView;
