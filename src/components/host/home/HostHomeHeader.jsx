
import { useNavigate } from "react-router-dom"
import person from "../../../assets/person.png"
import "../../../css/host/home/HostHomeHeader.css"
import { Dropdown } from "react-bootstrap";

//host 페이지의 상단 바
const HostHomeHeader = () => {

    const nav = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
        nav("/");
    }

    return (
        <header className="host-home-header">

            <Dropdown align="end" className="host-account-dropdown">
                <Dropdown.Toggle
                    variant="link"
                    className="host-home-header-person-button"
                >
                    <img src={person} alt="내 정보" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>nav("/dashboard")}>
                        대시보드
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>nav("/myContent")}>
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

export default HostHomeHeader;
