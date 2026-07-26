import { Modal } from "react-bootstrap";
import "../../../../css/participant/qna/QuestionSubmitModal.css"



const QuestionSubmitModal = ({ show, onHide, onSubmit }) => {


    return (<>


        <Modal show={show} contentClassName="question-submit-modal">
            <button className="question-submit-modal-x-button">X</button>
            <h3>질문 등록</h3>
            <textarea className="qustion-submit-modal-textarea" name="question-area" placeholder="질문을 등록해 보세요!" />

            <div className="qustion-submit-modal-button-box">
                <button className="qustion-submit-modal-cancel-button">취소</button>
                <button className="qustion-submit-modal-submit-button">완료</button>

            </div>
        </Modal>
    </>)
}

export default QuestionSubmitModal;