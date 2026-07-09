
import "../../../css/participant/qna/ParticipantReadyView.css"
import MyInfoPanel from "./MyInfoPanel";

const ParticipantReadyView = () => {

    return (<>

        
            <div className="ParticipantReadyView-parent-div">
                <div className="readyView-left-panel">

                </div>
                <div className="readyView-right-panel">
                    <MyInfoPanel/>
                    <div className="readyView-participant-list">
                        참여자목록
                    </div>
                </div>
                
            </div>

    </>)
}

export default ParticipantReadyView;