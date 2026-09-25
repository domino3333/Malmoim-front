

import "../../../css/host/qna/HostParticipantPanel.css"

const HostParticipantPanel = ({participantPresence})=>{

    return(<>

        <div className="host-participants">
            <div className="host-participants__header">
                참여자 수 {participantPresence.participantCount}
            </div>
            <div className="host-participants__body">
                {participantPresence.participants.map((participant)=>
                    <p key={participant.participantNo}>{participant.nickname}</p>
                )}
            </div>

        </div>

        
    </>)
}

export default HostParticipantPanel;
