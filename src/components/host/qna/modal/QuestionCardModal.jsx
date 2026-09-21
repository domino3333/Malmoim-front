import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionCardModal.css"
import { QUESTION_STATUS_LABELS } from "../../../../constants/qna/statusLabels";


const QuestionCardModal = ({ onToggleAnswerStatus, selectedQuestion, show, onHide }) => {


    const handleToggleAnswerStatus = async () => {

        try {
            await onToggleAnswerStatus(selectedQuestion.roomNo, selectedQuestion.questionNo);
            onHide();
        } catch (e) {
            const message = e.response?.data;

            alert(typeof message === "string" ? message : "답변 상태를 변경하지 못했습니다.")
        }
    }

    // 이미 답변 완료 상태라면 대기중으로 변경 < 이라는 버튼을 표시하기
    return (<>

        <Modal show={show} onHide={onHide} contentClassName="question-card-modal">
            <button
                className="QuestionCardModal-x-button"
                onClick={onHide}>X</button>
            <div className="QuestionCardModal-top">

                <p className="QuestionCardModal-status">
                    {QUESTION_STATUS_LABELS[selectedQuestion.status] ?? selectedQuestion.status}
                </p>
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
                    onClick={handleToggleAnswerStatus}>
                    {selectedQuestion.status === "WAITING" ? "답변 완료로 표시" : "대기 중으로 표시"}
                </button>
            </div>




        </Modal>
    </>)
}

export default QuestionCardModal;
