import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"


const QuestionCardModal = ({ onClickComplete, selectedQuestion, show, onHide }) => {


    const handleComplete = async () => {

        try {
            await onClickComplete(selectedQuestion.roomNo, selectedQuestion.questionNo);
            onHide();
        }catch(e){
            const message = e.response?.data;

            alert(typeof message === "string" ? message : "답변 상태를 변경하지 못했습니다.")
        }
    }

    return (<>

        <Modal show={show} onHide={onHide} contentClassName="question-card-modal">
            <button
                className="QuestionCardModal-x-button"
                onClick={onHide}>X</button>
            <div className="QuestionCardModal-top">
                <p className="QuestionCardModal-time">{selectedQuestion.createdAt}</p>
                <p className="QuestionCardModal-nickname">{selectedQuestion.nickname}</p>
            </div>
            <div className="QuestionCardModal-bottom">
                <p className="QuestionCardModal-content">{selectedQuestion.content}</p>
            </div >


            <div className="QuestionCardModal-button-parent">
                <button
                    className="QuestionCardModal-btn-cancel"
                    onClick={onHide}>
                    취소
                </button>
                <button
                    className="QuestionCardModal-btn-complete"
                    onClick={handleComplete}>
                    답변완료로 표시
                </button>
            </div>




        </Modal>
    </>)
}

export default QuestionCardModal;