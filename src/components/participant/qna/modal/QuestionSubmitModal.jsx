import { Modal } from "react-bootstrap";



const QuestionSubmitModal = ({show, onHide, onSubmit})=>{


    return(<>
    

        <Modal show={show} contentClassName="question-submit-modal">
            <h3>모달</h3>
        </Modal>
    </>)
}

export default QuestionSubmitModal;