import { Modal } from "react-bootstrap";
import "../../../../css/participant/qna/modal/QuestionSubmitModal.css"
import { useState } from "react";



const QuestionSubmitModal = ({ show, onHide, onSubmit }) => {


    const [question,setQuestion] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleQuestionChange = (e)=>{
        setQuestion(e.target.value);
    }

    const handleSubmit = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            await onSubmit(question);
            onHide();
        } catch (e) {
            const message = e.response?.data;
            alert(typeof message === "string" ? message
                : "등록 결과를 확인하지 못했습니다. 질문 목록을 확인해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<>


        <Modal show={show} onHide={onHide} contentClassName="question-submit-modal">
            <button className="question-submit-modal-x-button" onClick={onHide}>X</button>
            <h3>질문 등록</h3>
            <textarea onChange={handleQuestionChange} className="question-submit-modal-textarea" name="question-area" placeholder="질문을 등록해 보세요!" />

            <div className="question-submit-modal-button-box">
                <button className="question-submit-modal-cancel-button" onClick={onHide}>취소</button>
                <button className="question-submit-modal-submit-button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >{isSubmitting ? "등록 중..." : "완료"}</button>
            </div>
        </Modal>
    </>)
}

export default QuestionSubmitModal;
