
import "../../../css/participant/qna/ParticipantAnsweringView.css"
import ParticipantQuestionCard from "./ParticipantQuestionCard";

const ParticipantAnsweringView = ({questions}) => {

    return (<>
        <div className="ParticipantAnsweringView-parent-panel">
            <div className="ParticipantAnsweringView-top-panel">
                좋아요 순서대로 답변이 정렬되었어요.
                <br />
                호스트가 질문에 답변할 차례예요.
            </div>
            <div className="ParticipantAnsweringView-bottom-panel">
                <ParticipantQuestionCard questions={questions} showVoteCount/>
            </div>
        </div>

    </>)
}

export default ParticipantAnsweringView;
