import "../../../css/participant/qna/MyInfoPanel.css"

const MyInfoPanel = ({participantInfo})=>{

    return(<>
        
        <div className="MyInfoPanel-parent-div">
            <p>닉네임 : {participantInfo.nickname}</p>
            <p>내 질문 수:</p>
            <p>추천한 질문 수:</p>
        </div>
    </>)
}

export default MyInfoPanel;