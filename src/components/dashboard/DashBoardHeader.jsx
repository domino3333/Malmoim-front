
import logo from "../../assets/logo.png"
import "./DashBoardHeader.css"

const DashBoardHeader = () => {

    return (<>
        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" />
            <div>
                사용자 정보 버튼
            </div>
        </header>

    </>)
}

export default DashBoardHeader;