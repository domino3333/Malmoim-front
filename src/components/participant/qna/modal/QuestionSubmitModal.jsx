import { Modal } from "react-bootstrap";
import "../../../../css/participant/qna/QuestionSubmitModal.css"



const QuestionSubmitModal = ({show, onHide, onSubmit})=>{


    return(<>
    

        <Modal show={show} contentClassName="question-submit-modal">
            <button>X</button>
            <h3>질문 등록</h3>
            <textarea name="question-area" placeholder="질문을 해보세요!"/>
            <button className="">취소</button>
            <button>완료</button>
        </Modal>
    </>)
}

export default QuestionSubmitModal;