import { Modal } from "react-bootstrap";


const QuestionCardModal = ({ selectedQuestion, show, onHide }) => {


    return (<>

        <Modal show={show} onHide={onHide}>
            <h4>질문 카드 모달</h4>
            <p>ddd</p>
            닉네임:{selectedQuestion.content}
        </Modal>
    </>)
}

export default QuestionCardModal;