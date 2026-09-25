import "../../../css/participant/qna/ParticipantListPanel.css"



const ParticipantListPanel = ({participantPresence}) => {




    return (<>
        <div className="participant-list">
            <div className="participant-list-count">
                참여자 수 {participantPresence.participantCount}
            </div>

            <div className="participant-list-info">
                {participantPresence.participants.map((participant)=><p key={participant.participantNo}>{participant.nickname}</p>)}
            </div>
        </div>

    </>)
}

export default ParticipantListPanel;
