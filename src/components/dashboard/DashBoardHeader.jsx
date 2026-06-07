
import logo from "../../assets/logo.png"
import "../../css/dashboard/DashBoardHeader.css"

const DashBoardHeader = () => {

    return (<>
        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" />
            <div>
                내 정보버튼
            </div>
        </header>

    </>)
}

export default DashBoardHeader;
