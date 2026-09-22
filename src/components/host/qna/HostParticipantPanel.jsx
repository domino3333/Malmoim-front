

import "../../../css/host/qna/HostParticipantPanel.css"

const HostParticipantPanel = ({participantPresence})=>{

    return(<>

        <div className="HostParticipantPanel-main-div">
            <div className="HostParticipantPanel-header">
                참여자 수 {participantPresence.participantCount}
            </div>
            <div className="HostParticipantPanel-body">
                {participantPresence.participants.map((participant)=>
                    <p key={participant.participantNo}>{participant.nickname}</p>
                )}
            </div>

        </div>

        
    </>)
}

export default HostParticipantPanel;
