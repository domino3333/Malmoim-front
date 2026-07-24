import { Modal } from "react-bootstrap";



const QuestionSubmitModal = ({show, onHide, onSubmit})=>{


    return(<>
    

        <Modal show={show} contentClassName="question-submit-modal">
            <h3>질문 등록</h3>
            <textarea name="question-area">dff</textarea>
            <button>완료</button>
        </Modal>
    </>)
}

export default QuestionSubmitModal;