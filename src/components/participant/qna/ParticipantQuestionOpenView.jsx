
import "../../../css/participant/qna/ParticipantQuestionOpenView.css"
import { useState } from "react";
import { Modal } from "react-bootstrap";
import QuestionSubmitModal from "./modal/QuestionSubmitModal";
import ParticipantQuestionToolbar from "./ParticipantQuestionToolbar";
import ParticipantQuestionCard from "./ParticipantQuestionCard";

const ParticipantQuestionOpenView = ({ onQuestionSubmit, questions }) => {



    //todo 참여자의 정보 받아오기


    const [questionSubmitModalShow, setQuestionSubmitModalShow] = useState(false);






    return (<>

        <div className="Question-open-view-body">
            <div className="question-left-panel">
                <ParticipantQuestionToolbar onOpenQuestionModal={() => setQuestionSubmitModalShow(true)} />
                <ParticipantQuestionCard questions={questions}/>
            </div>
        </div>

        {questionSubmitModalShow &&
            <QuestionSubmitModal show={questionSubmitModalShow} onHide={() => setQuestionSubmitModalShow(false)} onSubmit={onQuestionSubmit} />
        }




    </>)
}

export default ParticipantQuestionOpenView;
