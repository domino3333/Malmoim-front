import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"


const QuestionCardModal = ({ selectedQuestion, show, onHide }) => {


    return (<>

        <Modal show={show} onHide={onHide}>
            <h4>질문 카드 모달</h4>
            <p>ddd</p>
            닉네임:{selectedQuestion.nickname}
        </Modal>
    </>)
}

export default QuestionCardModal;