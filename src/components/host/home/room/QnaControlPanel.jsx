
import "../../../../css/host/qna/QnaControlPanel.css"

// 호스트의 Q&A 진행 단계 조작용 제어 패널 컴포넌트
const QnaControlPanel = ({ onOpenTimerModal }) => {

    return (<>

        <button onClick={onOpenTimerModal}>
            질문 시작
        </button>
        <button>
            추천 시작
        </button>
        <button>
            결과 공개
        </button>
        <button>
            질문 종료
        </button>
    </>)
}


export default QnaControlPanel;
