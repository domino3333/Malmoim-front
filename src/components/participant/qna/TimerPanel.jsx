import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ timerInfo }) => {


    //todo 시작/종료시간으로 타이머 그리기

    return (<>

        <div className="timer-panel-parent-div">
            <p>시작{timerInfo.questionStartedAt}</p>
            <p>종료:{timerInfo.questionEndedAt}</p>
        </div>
    </>)
}

export default TimerPanel;