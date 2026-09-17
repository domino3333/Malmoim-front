import { Modal } from "react-bootstrap";


const QuestionCardModal = ({show, onHide})=>{


    return(<>

        <Modal show={show} onHide={onHide}>
            <h4>질문 카드 모달</h4>
            {/* 질문 넘겨받아야함 */}
        </Modal>
    </>)
}

export default QuestionCardModal;