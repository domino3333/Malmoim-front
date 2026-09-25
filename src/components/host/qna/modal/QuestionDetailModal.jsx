import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/QuestionDetailModal.css"
import { QUESTION_STATUS_LABELS } from "../../../../constants/qna/statusLabels";
import { formatLocalDateTime } from "../../../../utils/date/formatLocalDateTime";
import PersonAvatarIcon from "../../../common/PersonAvatarIcon"

const QuestionDetailModal = ({ onToggleAnswerStatus, selectedQuestion, show, onHide }) => {


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

        <Modal show={show} onHide={onHide} contentClassName="question-detail-modal">
            <button
                className="question-detail-modal-close-button"
                onClick={onHide}>X</button>
            <div className="question-detail-modal-top">

                <p className="question-detail-modal-status">
                    {QUESTION_STATUS_LABELS[selectedQuestion.status] ?? selectedQuestion.status}
                </p>
                <p className="question-detail-modal-time">{formatLocalDateTime(selectedQuestion.createdAt)}</p>
                <div className="question-detail-writer-div">
                    <PersonAvatarIcon size={36} color="#90653E" className="author-avatar-icon"/>
                    <div className="question-detail-modal-nickname-title">
                        <p className="question-detail-modal-writer">질문 작성자</p>
                        <p className="question-detail-modal-nickname">{selectedQuestion.nickname}</p>

                    </div>
                </div>
            </div>
            <div className="question-detail-modal-bottom">
                <p className="question-detail-modal-content">{selectedQuestion.content}</p>
            </div >


            <div className="question-detail-modal-button-group">
                <button
                    className="question-detail-modal-cancel-button"
                    onClick={onHide}>
                    취소
                </button>
                <button
                    className="question-detail-modal-toggle-button"
                    onClick={handleToggleAnswerStatus}>
                    {selectedQuestion.status === "WAITING" ? "답변 완료로 표시" : "대기 중으로 표시"}
                </button>
            </div>




        </Modal>
    </>)
}

export default QuestionDetailModal;
