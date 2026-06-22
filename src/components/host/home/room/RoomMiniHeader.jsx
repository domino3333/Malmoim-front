
import "../../../../css/host/home/room/RoomMiniHeader.css"

const RoomMiniHeader = ({ roomInfo }) => {


    return (<>

        <div className="RoomMiniHeader-main-div">
            <div className="RoomMiniHeader-padding-div">
                <div className="RoomMiniHeader-title">
                    방제목:{roomInfo.title}
                </div>
                <div className="RoomMiniHeader-code">
                    입장 코드:{roomInfo.code}
                </div>
                <div className="RoomMiniHeader-stauts">
                    상태:{roomInfo.status}
                </div>
            </div>
        </div>

    </>)
}

export default RoomMiniHeader;
