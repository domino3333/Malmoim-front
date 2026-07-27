import { Modal } from "react-bootstrap";
import "../../../../css/participant/qna/QuestionSubmitModal.css"
import { useState } from "react";



const QuestionSubmitModal = ({ show, onHide, onSubmit }) => {


    const [question,setQuestion] = useState("");


    const handleQuestionChange = (e)=>{
        setQuestion(e.target.value);
    }
    return (<>


        <Modal show={show} contentClassName="question-submit-modal">
            <button className="question-submit-modal-x-button">X</button>
            <h3>질문 등록</h3>
            <textarea onChange={handleQuestionChange} className="qustion-submit-modal-textarea" name="question-area" placeholder="질문을 등록해 보세요!" />

            <div className="qustion-submit-modal-button-box">
                <button className="qustion-submit-modal-cancel-button">취소</button>
                <button className="qustion-submit-modal-submit-button"
                    onClick={()=>onSubmit(question)}
                >완료</button>
            </div>
        </Modal>
    </>)
}

export default QuestionSubmitModal;