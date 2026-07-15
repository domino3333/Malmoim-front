
import "../../../css/participant/qna/ParticipantReadyView.css"
import ParticipantListPanel from "../ParticipantListPanel";
import MyInfoPanel from "./MyInfoPanel";

const ParticipantReadyView = () => {

    return (<>

        
            <div className="ParticipantReadyView-parent-div">
                <div className="readyView-left-panel">
                    호스트가 질문 시간을 준비 중이에요...
                </div>
                <div className="readyView-right-panel">
                    <MyInfoPanel/>
                    <ParticipantListPanel/>
                </div>
                
            </div>


    </>)
}

export default ParticipantReadyView;