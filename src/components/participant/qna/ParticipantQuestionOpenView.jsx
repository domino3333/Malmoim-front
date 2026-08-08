
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

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        restart
    } = useTimer({
        expiryTimestamp: new Date(timerInfo.questionEndedAt),
        onExpire: () => console.log("질문 시간 종료"),
        autoStart: false,
    });

    const timerTime = { minutes, seconds }

    //todo 참여자의 정보 받아오기


    const [questionSubmitModalShow, setQuestionSubmitModalShow] = useState(false);


    useEffect(() => {
        if (!timerInfo?.questionEndedAt) {
            return;
        }


        const expiryTime = new Date(timerInfo.questionEndedAt);

        restart(expiryTime, true);

    }, [timerInfo?.questionEndedAt]);



    return (<>
        <div className="Question-open-view-head">
            <TimerPanel timerTime={timerTime} />
            <StatusPanel isRunning={isRunning} />

        </div>
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
