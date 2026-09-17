import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"


const QuestionCardModal = ({ selectedQuestion, show, onHide }) => {


    return (<>

        <Modal show={show} onHide={onHide}>
            <div className="QuestionCardModal-top">
                <p>{selectedQuestion.createdAt}</p>
                <p>닉네임</p>
                <p>{selectedQuestion.nickname}</p>
            </div>

            <div className="QuestionCardModal-bottom">
                <p>질문</p>
                <p>{selectedQuestion.content}</p>
            </div >




        </Modal>
    </>)
}

export default QuestionCardModal;