

import "../../../../css/host/home/room/RoomHeader.css"
import logo from "../../../../assets/logo.png"


const RoomHeader = ({ title }) => {

    return (<>
        <div className="RoomHeader-main-div">
            <img src={logo} alt="로고" className="RoomHeader-logo" />
            <div className="RoomHeader-title">
                {title}
            </div>
            <div className="RoomHeader-my-info">
                정보
            </div>

        </div>
    </>)
}

export default RoomHeader;