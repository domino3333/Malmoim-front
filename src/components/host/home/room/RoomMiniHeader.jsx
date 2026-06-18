

const RoomMiniHeader = ({ title, code, status }) => {


    return (<>

        <div className="RoomMiniHeader-main-div">
            <div className="RoomMiniHeader-title">
                방제목:{title}
            </div>
            <div className="RoomMiniHeader-code">
                입장 코드:{code}
            </div>
            <div className="RoomMiniHeader-stauts">
                상태:{status}
            </div>
        </div>

    </>)
}

export default RoomMiniHeader;
