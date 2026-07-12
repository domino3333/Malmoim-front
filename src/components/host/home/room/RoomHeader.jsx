

import "../../../../css/host/home/room/RoomHeader.css"
import logo from "../../../../assets/logo.png"


const RoomHeader = ({ title, onLogoClick }) => {

    return (<>
        <div className="RoomHeader-main-div">
            <div className="RoomHeader-left-div">
                <img src={logo} onClick={onLogoClick} alt="로고" className="RoomHeader-logo" />
                <div className="RoomHeader-title">
                    {title}
                </div>
            </div>
            <div className="RoomHeader-my-info">
                정보
            </div>

        </div>
    </>)
}

export default RoomHeader;
