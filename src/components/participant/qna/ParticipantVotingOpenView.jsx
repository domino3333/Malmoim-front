
import { castVote } from "../../../api/qna/participantQnaApi";
import "../../../css/participant/qna/ParticipantVotingOpenView.css"
import ParticipantQuestionList from "./ParticipantQuestionList";
const ParticipantVotingOpenView = ({ questions, roomInfo }) => {



    const handleVote = async (questionNo) => {
        await castVote(questionNo, roomInfo.roomNo);

    }

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
                <ParticipantQuestionList
                    questions={questions}
                    canVote={true}
                    onVote={handleVote}
                />
            </div>
        </div>
    </>)
}

export default ParticipantVotingOpenView;
