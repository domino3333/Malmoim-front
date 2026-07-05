
import logo from "../../../assets/logo.png"
import "../../../css/host/home/HostHomeHeader.css"

//host 페이지의 상단 바
const HostHomeHeader = ({ clickTab }) => {

    return (<>
        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" onClick={()=>clickTab("/")} />
            <div>
                내 정보버튼
            </div>
        </header>

    </>)
}

export default HostHomeHeader;
