import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ timerInfo }) => {


    

    return (<>

        <div className="timer-panel-parent-div">
            <p>시작{timerInfo.questionStartedAt}</p>
            <p>종료:{timerInfo.questionEndedAt}</p>
        </div>
    </>)
}

export default TimerPanel;