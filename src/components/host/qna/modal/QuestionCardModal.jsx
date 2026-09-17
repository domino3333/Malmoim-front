import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"


const QuestionCardModal = ({ selectedQuestion, show, onHide }) => {


    return (<>

        <Modal show={show} onHide={onHide} contentClassName="question-card-modal">
            <button className="QuestionCardModal-x-button">X</button>
            <div className="QuestionCardModal-top">
                <p className="QuestionCardModal-time">{selectedQuestion.createdAt}</p>
                <p className="QuestionCardModal-nickname">{selectedQuestion.nickname}</p>
            </div>
            <hr />
            <div className="QuestionCardModal-bottom">
                <p className="QuestionCardModal-content">{selectedQuestion.content}</p>
            </div >




        </Modal>
    </>)
}

export default QuestionCardModal;