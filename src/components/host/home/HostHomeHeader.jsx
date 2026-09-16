
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/logo.png"
import person from "../../../assets/person.png"
import "../../../css/host/home/HostHomeHeader.css"

//host 페이지의 상단 바
const HostHomeHeader = () => {

    const nav = useNavigate();

    return (<>
        <header className="host-home-header">
            <img className="host-home-header-logo" src={logo} alt="로고" onClick={() => nav("/")} />
            <button
                type="button"
                className="host-home-header-person-button"
                onClick={() => nav("/")}
            >
                <img src={person} alt="내 정보" />
            </button>
        </header>

    </>)
}

export default HostHomeHeader;
