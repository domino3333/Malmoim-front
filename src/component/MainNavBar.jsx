

import "MainNavBar.css"
import { Link } from "react-router-dom"


const MainNavBar = ()=>{


    return (<>
        <header>
            <div className="navbar-logo">
                <Link to="/">말모임로고</Link>
            </div>
        </header>

        <nav className="navbar-menu">
            <Link to="/intro">서비스 소개</Link>
            <Link to="/how-to-use">사용 방법</Link>
        </nav>
        <div className="navbar-auth">
            <Link to="/login">로그인</Link>
            <Link to="/signUp">회원가입</Link>

        </div>
    </>)
}