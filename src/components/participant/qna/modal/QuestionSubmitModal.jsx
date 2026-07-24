import { Modal } from "react-bootstrap";



const QuestionSubmitModal = ({questionSubmitModalShow})=>{


    return(<>
    

        <Modal show={questionSubmitModalShow} contentClassName="question-submit-modal">
            <h3>모달</h3>
        </Modal>
    </>)
}

export default QuestionSubmitModal;