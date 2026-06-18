
import logo from "../../../assets/logo.png"
import "../../../css/host/home/HomeHeader.css"

const HomeHeader = () => {

    return (<>
        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" />
            <div>
                내 정보버튼
            </div>
        </header>

    </>)
}

export default HomeHeader;
