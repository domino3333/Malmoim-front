

import "../../../css/common/room/RoomHeader.css"
import logo from "../../../assets/logo.png"


const RoomHeader = ({ title, onLogoClick, rightContent }) => {

    return (<>
        <div className="room-header">
            <div className="room-header__brand">
                <img src={logo} onClick={onLogoClick} alt="로고" className="room-header__logo" />
                <div className="room-header__title">
                    {title}
                </div>
            </div>
            {rightContent && <div className="room-header__actions">{rightContent}</div>}

        </div>
    </>)
}

export default RoomHeader;
