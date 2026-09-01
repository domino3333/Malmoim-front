import ParticipantQuestionCard from "./ParticipantQuestionCard";
import "../../../css/participant/qna/ParticipantVotingClosedView.css"


const ParticipantVotingClosedView = ({questions}) => {


    return (<>
        <div className="ParticipantVotingClosedView-parent-panel">
                <div className="ParticipantVotingClosedView-top-panel">
                    투표가 종료되었어요.
                    <br />
                    호스트가 결과를 공개하는 것을 기다려주세요.
                </div>
                <div className="ParticipantVotingClosedView-bottom-panel">
                    <ParticipantQuestionCard questions={questions}/>
                </div>
            </div>
    </>)
}

export default ParticipantVotingClosedView;