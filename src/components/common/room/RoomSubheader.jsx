import "../../../css/common/room/RoomSubheader.css"

const RoomSubheader = ({ roomInfo }) => {


    return (<>

        <div className="room-subheader">
            <div className="room-subheader__fields">
                <div className="room-subheader__title">
                    방 제목: {roomInfo.title}
                </div>
                <div className="room-subheader__code">
                    입장 코드: {roomInfo.code}
                </div>
                <div className="room-subheader__visibility">
                    공개 여부: {roomInfo.visibility === "PUBLIC" ? "공개방" : "비밀방"}
                </div>
            </div>
        </div>

    </>)
}

export default RoomSubheader;
