import "../../../css/participant/qna/ParticipantListPanel.css"



const ParticipantListPanel = ({participantList}) => {





    return (<>
        <div className="ParticipantListPanel-parent-div">
            <div className="participant-list-count">
                참여자 수: {participantList.participantCount}
            </div>
            <div className="participant-list-info">
                닉네임 쭈루룩
            </div>
        </div>

    </>)
}

export default ParticipantListPanel;