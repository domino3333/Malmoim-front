import ParticipantQuestionCard from "./ParticipantQuestionCard";
import "../../../css/participant/qna/ParticipantVotingClosedView.css"


const ParticipantVotingClosedView = ({questions}) => {


    return (<>
        <div className="ParticipantVotingClosedView-parent-panel">
                <div className="ParticipantVotingClosedView-top-panel">
                    투표가 종료되었어요.
                    <br />
                    호스트가 여러분들의 질문에 대답할 차례예요
                </div>
                <div className="ParticipantVotingClosedView-bottom-panel">
                    <ParticipantQuestionCard questions={questions} isVisibleText={true}/>
                </div>
            </div>
    </>)
}

export default ParticipantVotingClosedView;