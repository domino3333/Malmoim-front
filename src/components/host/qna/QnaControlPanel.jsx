
import "../../../css/host/qna/QnaControlPanel.css"

// 호스트의 Q&A 진행 단계 조작용 제어 패널 컴포넌트
const QnaControlPanel = ({ onOpenQuestionTimerModal, onOpenVotingTimerModal, onRevealResults }) => {

    return (<>


        <div className="QnaControlPanel-parent-div">
            <button
                className="QnaControlPanel-btn-1"
                onClick={onOpenQuestionTimerModal}>
                질문 시작
            </button >
            <button
                className="QnaControlPanel-btn-1"
                onClick={onOpenVotingTimerModal}>
                추천 시작
            </button>
            <button
                className="QnaControlPanel-btn-1"
                onClick={onRevealResults}>
                결과 공개
            </button>
            <button
                className="QnaControlPanel-btn-1">
                질문 종료
            </button>

        </div>
    </>)
}


export default QnaControlPanel;
