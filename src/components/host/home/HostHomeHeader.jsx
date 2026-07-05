
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/logo.png"
import "../../../css/host/home/HostHomeHeader.css"

//host 페이지의 상단 바
const HostHomeHeader = () => {

    const nav = useNavigate();

    return (<>
        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" onClick={()=>nav("/")} />
            <div>
                내 정보버튼
            </div>
        </header>

    </>)
}

export default HostHomeHeader;
