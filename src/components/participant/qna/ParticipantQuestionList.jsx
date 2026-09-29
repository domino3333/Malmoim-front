import "../../../css/participant/qna/ParticipantQuestionList.css";
import ParticipantQuestionCard from "./ParticipantQuestionCard";

const ParticipantQuestionList = ({ questions, canVote = false, showVoteCount = false, showRank = false, showAnswerStatus = false, onVote, isVoting = false,onClickQuestionCard }) => {
    return (
        <div className="ParticipantQuestionList">
            {questions.length === 0 ? (
                <p className="ParticipantQuestionList-empty">아직 등록된 질문이 없어요.</p>
            ) : (
                questions.map((question) => (
                    <ParticipantQuestionCard
                        key={question.questionNo}
                        question={question}
                        canVote={canVote}
                        showVoteCount={showVoteCount}
                        showRank={showRank}
                        showAnswerStatus={showAnswerStatus}
                        onVote={onVote}
                        isVoting={isVoting}
                        onClickQuestionCard={onClickQuestionCard}
                    />
                ))
            )}
        </div>
    );
};

export default ParticipantQuestionList;
