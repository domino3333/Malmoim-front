
import "../../../../css/host/qna/RemoteControl.css"

const RemoteControl = ({ setShow }) => {

    return (<>

        <button onClick={()=>setShow(true)}>
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


export default RemoteControl;