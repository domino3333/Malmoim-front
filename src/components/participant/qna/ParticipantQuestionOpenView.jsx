
import { useTimer } from "react-timer-hook";
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import ParticipantListPanel from "../ParticipantListPanel";
import MyInfoPanel from "./MyInfoPanel";
import StatusPanel from "./StatusPanel";
import TimerPanel from "./TimerPanel";
import { useEffect } from "react";

const ParticipantQuestionOpenView = ({ timerInfo }) => {

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        restart
    } = useTimer({
        expiryTimestamp: new Date(timerInfo.questionEndedAt),
        onExpire: () => console.log(" 질문 시간 종료"),
        autoStart: false,
    });

    const timerTime = { minutes, seconds }

    //todo 참여자의 정보 받아오기



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
                <h3>질문을 등록해주세요!</h3>
                <button className="question-left-panel-register"> 등록하기 </button>
            </div>
            <div className="question-right-panel">
                <MyInfoPanel />
                <ParticipantListPanel />
            </div>
        </div>


        {/* 여기서 버튼 누르면 모달이 나와야 함 */}
    </>)
}

export default ParticipantQuestionOpenView;