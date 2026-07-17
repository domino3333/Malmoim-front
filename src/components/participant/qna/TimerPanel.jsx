import "./../../../css/participant/qna/TimerPanel.css"


const TimerPanel = ({ timerInfo }) => {


    

    return (<>

        <div className="timer-panel-parent-div">
            {timerInfo.questionStartedAt}
            <p>종료:{timerInfo.questionEndedAt}</p>
        </div>
    </>)
}

export default TimerPanel;