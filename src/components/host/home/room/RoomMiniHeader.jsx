import "../../../../css/host/home/room/RoomMiniHeader.css"

const RoomMiniHeader = ({ roomInfo }) => {


    return (<>

        <div className="RoomMiniHeader-main-div">
            <div className="RoomMiniHeader-padding-div">
                <div className="RoomMiniHeader-title">
                    방 제목: {roomInfo.title}
                </div>
                <div className="RoomMiniHeader-code">
                    입장 코드: {roomInfo.code}
                </div>
                <div className="RoomMiniHeader-status">
                    공개 여부: {roomInfo.visibility === "PUBLIC" ? "공개방" : "비밀방"}
                </div>
            </div>
        </div>

    </>)
}

export default RoomMiniHeader;
