import "../../../css/participant/qna/ParticipantInfoPanel.css"

const ParticipantInfoPanel = ({participantInfo})=>{

    return(<>
        
        <div className="participant-info">
            <p>내 닉네임 : {participantInfo.nickname}</p>
        </div>
    </>)
}

export default ParticipantInfoPanel;
