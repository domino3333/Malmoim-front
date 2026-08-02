import { Modal } from "react-bootstrap";
import "../../../../css/participant/qna/QuestionSubmitModal.css"
import { useState } from "react";



const QuestionSubmitModal = ({ show, onHide, onSubmit }) => {


    const [question,setQuestion] = useState("");


    const handleQuestionChange = (e)=>{
        setQuestion(e.target.value);
    }
    return (<>


        <Modal show={show} onHide={onHide} contentClassName="question-submit-modal">
            <button className="question-submit-modal-x-button" onClick={onHide}>X</button>
            <h3>질문 등록</h3>
            <textarea onChange={handleQuestionChange} className="question-submit-modal-textarea" name="question-area" placeholder="질문을 등록해 보세요!" />

            <div className="question-submit-modal-button-box">
                <button className="question-submit-modal-cancel-button" onClick={onHide}>취소</button>
                <button className="question-submit-modal-submit-button"
                    onClick={()=>{
                        onSubmit(question)
                        onHide()
                    }}
                >완료</button>
            </div>
        </Modal>
    </>)
}

export default QuestionSubmitModal;