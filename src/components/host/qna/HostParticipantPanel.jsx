

import "../../../css/host/qna/HostParticipantPanel.css"

const HostParticipantPanel = ({participantList})=>{

    return(<>

        <div className="HostParticipantPanel-main-div">
            <div className="HostParticipantPanel-header">
                참여자 수 {participantList.participantCount}
            </div>
            <div className="HostParticipantPanel-body">
                {participantList.participants.map((participant)=>
                    <p key={participant.participantNo}>{participant.nickname}</p>
                )}
            </div>

        </div>

        
    </>)
}

export default HostParticipantPanel;
