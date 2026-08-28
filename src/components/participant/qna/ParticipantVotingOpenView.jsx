
import "../../../css/participant/qna/ParticipantVotingOpenView.css"
import ParticipantQuestionCard from "./ParticipantQuestionCard";
const ParticipantVotingOpenView = ({questions}) => {

    return (<>
        <div className="ParticipantVotingOpenView-parent-div">
                <div className="ParticipantVotingOpenView-left-panel">
                    {questions.map((question)=>{
                        <ParticipantQuestionCard key={question.no} questions={questions}/>
                    })}
                </div>
                
            </div>
    </>)
}

export default ParticipantVotingOpenView;