
import "../../../css/participant/qna/ParticipantVotingOpenView.css"
import ParticipantQuestionCard from "./ParticipantQuestionCard";
const ParticipantVotingOpenView = ({ questions }) => {

    return (<>
        <div className="ParticipantVotingOpenView-parent-div">
            <div className="ParticipantVotingOpenView-left-panel">
                <ParticipantQuestionCard questions={questions} />
            </div>

        </div>
    </>)
}

export default ParticipantVotingOpenView;