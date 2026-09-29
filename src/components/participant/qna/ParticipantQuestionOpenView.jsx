
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import { useState } from "react";
import { Modal } from "react-bootstrap";
import QuestionSubmitModal from "./modal/QuestionSubmitModal";
import ParticipantQuestionToolbar from "./ParticipantQuestionToolbar";
import ParticipantQuestionList from "./ParticipantQuestionList";

const ParticipantQuestionOpenView = ({ onQuestionSubmit, questions, showRank, onClickQuestionCard }) => {



    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);






    return (<>

        <div className="Question-open-view-body">
            <div className="question-left-panel">
                <ParticipantQuestionToolbar onOpenQuestionModal={() => setIsQuestionModalOpen(true)} />
                <ParticipantQuestionList questions={questions} showRank={showRank} onClickQuestionCard={onClickQuestionCard}/>
            </div>
        </div>

        {isQuestionModalOpen &&
            <QuestionSubmitModal show={isQuestionModalOpen} onHide={() => setIsQuestionModalOpen(false)} onSubmit={onQuestionSubmit} />
        }




    </>)
}

export default ParticipantQuestionOpenView;
