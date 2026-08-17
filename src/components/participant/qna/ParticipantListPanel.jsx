import "../../../css/participant/qna/ParticipantListPanel.css"



const ParticipantListPanel = ({participantList}) => {




    return (<>
        <div className="ParticipantListPanel-parent-div">
            <div className="participant-list-count">
                참여자 수 {participantList.participantCount}
            </div>


            <div className="participant-list-info">
                {participantList.participants.map((participant)=><p>{participant.nickname}</p>)}
            </div>
        </div>

    </>)
}

export default ParticipantListPanel;