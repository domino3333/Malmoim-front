
import "../../../css/participant/qna/ParticipantAnsweringView.css"
import ParticipantQuestionList from "./ParticipantQuestionList";


const sortQuestionByVoteCount = (questions) => {
    return [...questions].sort((a, b) => {
        const voteDifference = b.voteCount - a.voteCount;

        if(voteDifference !==0){
            return voteDifference;
        }

        return new Date(b.createdAt).getTime()
            - new Date(a.createdAt).getTime();

    })

}




const ParticipantAnsweringView = ({ questions }) => {

    const sortedQuestions = sortQuestionByVoteCount(questions);

    return (<>
        <div className="ParticipantAnsweringView-parent-panel">
            <div className="ParticipantAnsweringView-top-panel">
                좋아요 순서대로 답변이 정렬되었어요.
                <br />
                호스트가 질문에 답변할 차례예요.
            </div>
            <div className="ParticipantAnsweringView-bottom-panel">
                <ParticipantQuestionList questions={sortedQuestions} showVoteCount />
            </div>
        </div>

    </>)
}

export default ParticipantAnsweringView;
