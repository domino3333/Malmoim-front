import HostHomeLayout from "../../../components/host/home/HostHomeLayout";
import "../../../css/host/home/RoomTypeSelectionPage.css";
import audience from "../../../assets/audience.png"
import { useState } from "react";
import CreateQnaRoomModal from "../../../components/host/qna/modal/CreateQnaRoomModal";



const RoomTypeSelectionPage = () => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <HostHomeLayout>
            <div className="room-type-selection-page">
                <div className="btn-box">
                    <button className="btn1" onClick={() => setIsCreateModalOpen(true)}>
                        <img src={audience} alt="청중이미지" />
                        <div className="div-qna">
                            청중 Q&A
                        </div>
                    </button>

                </div>
            </div>

            <CreateQnaRoomModal show={isCreateModalOpen} onHide={()=>setIsCreateModalOpen(false)} title={"청중Q&A"}/>
        </HostHomeLayout>
    )
}

export default RoomTypeSelectionPage;
