
import "../../../css/participant/qna/ParticipantVotingOpenView.css"
import ParticipantQuestionCard from "./ParticipantQuestionCard";
const ParticipantVotingOpenView = ({ questions }) => {

    return (<>
         <div className="ParticipantVotingOpenView-parent-panel">
                <div className="ParticipantVotingOpenView-top-panel">
                    투표가 시작되었어요.
                    <br />
                    질문들을 읽고
                    <br />
                    공감하는 질문에 좋아요를 눌러주세요.
                </div>
                <div className="ParticipantVotingOpenView-bottom-panel">
                    <ParticipantQuestionCard questions={questions}/>
                </div>
            </div>
    </>)
}

export default ParticipantVotingOpenView;