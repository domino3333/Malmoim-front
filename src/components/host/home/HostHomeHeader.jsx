
import { useNavigate } from "react-router-dom"
import person from "../../../assets/person.png"
import "../../../css/host/home/HostHomeHeader.css"

//host 페이지의 상단 바
const HostHomeHeader = () => {

    const nav = useNavigate();

    return (
        <header className="host-home-header">
            <button
                type="button"
                className="host-home-header-person-button"
                onClick={() => nav("/")}
            >
                <img src={person} alt="내 정보" />
            </button>
        </header>
    )
}

export default HostHomeHeader;
