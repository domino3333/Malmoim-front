
import { useNavigate } from "react-router-dom"
import person from "../../../assets/person.png"
import "../../../css/host/common/HostHeader.css"
import { Dropdown } from "react-bootstrap";

//host 페이지의 상단 바
const HostHeader = ({ compact = false }) => {

    const nav = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
        nav("/");
    }

    return (
        <header className={`host-header${compact ? " host-header--compact" : ""}`}>

            <Dropdown align="end" className="host-account-dropdown">
                <Dropdown.Toggle
                    variant="link"
                    className="host-header__account"
                >
                    <img src={person} alt="내 정보" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>nav("/dashboard")}>
                        대시보드
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>nav("/my-rooms")}>
                        내 말모임
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                        로그아웃
                    </Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>


        </header>
    )
}

export default HostHeader;
