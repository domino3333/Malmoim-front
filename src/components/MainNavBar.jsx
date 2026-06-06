

import "./MainNavBar.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";

const MainNavBar = () => {


    return (<>
        <header className="navbar-header">
            <div className="navbar-logo">
                <Link to="/"><img src={logo} /></Link>
            </div>

            <nav className="navbar-menu">
                <Link to="/intro">서비스 소개</Link>
                <Link to="/how-to-use">사용 방법</Link>
            </nav>
            <div className="navbar-auth">
                <div className="div-login">
                    <Link to="/login">로그인</Link>
                </div>
                <div>
                    <Link to="/signUp">
                        <div className="div-signUp">
                            회원가입
                        </div>
                    </Link>
                </div>

            </div>
        </header>
    </>)
}

export default MainNavBar;