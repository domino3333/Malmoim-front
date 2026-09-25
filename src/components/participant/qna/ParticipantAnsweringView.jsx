
import "../../../css/participant/qna/ParticipantAnsweringView.css"
import ParticipantQuestionList from "./ParticipantQuestionList";


const sortQuestionsByVoteCount = (questions) => {
    return [...questions].sort((a, b) => {
        const voteDifference = b.voteCount - a.voteCount;

        if(voteDifference !==0){
            return voteDifference;
        }

        return new Date(b.createdAt).getTime()
            - new Date(a.createdAt).getTime();

    })

}




const ParticipantAnsweringView = ({ questions, showRank }) => {

    const sortedQuestions = sortQuestionsByVoteCount(questions);

    return (<>
        <div className="participant-answering">
            <div className="participant-answering__header">
                좋아요 순서대로 답변이 정렬되었어요.
                <br />
                호스트가 질문에 답변할 차례예요.
            </div>
            <div className="participant-answering__body">
                <ParticipantQuestionList questions={sortedQuestions} showVoteCount showRank={showRank} />
            </div>
        </div>

    </>)
}

export default ParticipantAnsweringView;
