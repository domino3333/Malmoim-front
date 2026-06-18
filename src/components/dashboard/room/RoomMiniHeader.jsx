

const RoomMiniHeader = () => {


    return (<>

        <div className="RoomMiniHeader-main-div">
            <div>
                방제목:{title}
            </div>
            <div>
                입장 코드:{code}
            </div>
            <div>
                상태:{stauts}
            </div>
        </div>

    </>)
}

export default RoomMiniHeader;