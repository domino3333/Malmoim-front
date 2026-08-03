import "../../../../css/host/home/room/RoomSubheader.css"

const RoomSubheader = ({ roomInfo }) => {


    return (<>

        <div className="RoomSubheader-main-div">
            <div className="RoomSubheader-padding-div">
                <div className="RoomSubheader-title">
                    방 제목: {roomInfo.title}
                </div>
                <div className="RoomSubheader-code">
                    입장 코드: {roomInfo.code}
                </div>
                <div className="RoomSubheader-status">
                    공개 여부: {roomInfo.visibility === "PUBLIC" ? "공개방" : "비밀방"}
                </div>
            </div>
        </div>

    </>)
}

export default RoomSubheader;
