import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"


const QuestionCardModal = ({ selectedQuestion, show, onHide }) => {


    return (<>

        <Modal show={show} onHide={onHide}>
            <div className="QuestionCardModal-top">
                <p className="QuestionCardModal-time">{selectedQuestion.createdAt}</p>
                <p className="QuestionCardModal-nickname-text">닉네임</p>
                <p className="QuestionCardModal-nickname">{selectedQuestion.nickname}</p>
            </div>

            <div className="QuestionCardModal-bottom">
                <p className="QuestionCardModal-content-text">질문</p>
                <p className="QuestionCardModal-content">{selectedQuestion.content}</p>
            </div >




        </Modal>
    </>)
}

export default QuestionCardModal;