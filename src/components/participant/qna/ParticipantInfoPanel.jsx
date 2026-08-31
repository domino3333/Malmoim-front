import "../../../css/participant/qna/ParticipantInfoPanel.css"

const ParticipantInfoPanel = ({participantInfo})=>{

    return(<>
        
        <div className="ParticipantInfoPanel-parent-div">
            <p>닉네임 : {participantInfo.nickname}</p>
            <p>내 질문 수:</p>
            <p>추천한 질문 수:</p>
        </div>
    </>)
}

export default ParticipantInfoPanel;
