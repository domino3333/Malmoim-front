

import "../../../css/host/qna/QnaParticipantPanel.css"

const QnaParticipantPanel = ({participantList})=>{

    return(<>

        <div className="QnaParticipantPanel-main-div">
            <div className="QnaParticipantPanel-header">
                참여자 수: {participantList.participantCount}
            </div>
            <div className="QnaParticipantPanel-body">
                {participantList.participants.map((participant)=>
                    <p key={participant.participantNo}>{participant.nickname}</p>
                )}
            </div>

        </div>

        
    </>)
}

export default QnaParticipantPanel;
