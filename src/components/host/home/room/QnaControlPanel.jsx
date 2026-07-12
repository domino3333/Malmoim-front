
import "../../../../css/host/qna/QnaControlPanel.css"

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
