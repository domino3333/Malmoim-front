import ParticipantQuestionCard from "./ParticipantQuestionCard";


const ParticipantVotingClosedView = ({questions}) => {


    return (<>
        <div className="ParticipantVotingOpenView-parent-panel">
                <div className="ParticipantVotingOpenView-top-panel">
                    투표가 종료되었어요.
                    <br />
                    호스트가 여러분들의 질문에 대답할 차례예요
                </div>
                <div className="ParticipantVotingOpenView-bottom-panel">
                    <ParticipantQuestionCard questions={questions}/>
                </div>
            </div>
    </>)
}

export default ParticipantVotingClosedView;