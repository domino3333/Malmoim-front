import '../../css/public/MainNavbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { getAccessToken } from '../../utils/auth/tokenStorage'

const MainNavbar = () => {
  // "/" 루트에 있고, 누구나 볼 수 있는 페이지


  const hasAccessToken = Boolean(getAccessToken());

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="말모임 로고" /></Link>
        </div>

        <nav className="navbar-menu">
          <Link to="/intro">서비스 소개</Link>
          <Link to="/how-to-use">사용 방법</Link>
        </nav>

        {hasAccessToken ? <>
          <div className="navbar-auth">
            내 말모임
          </div>
        </> : <>
          <div className="navbar-auth">
            <div className="div-login">
              <Link to="/login">로그인</Link>
            </div>
            <div>
              <Link to="/signUp">
                <div className="div-signUp">회원가입</div>
              </Link>
            </div>
          </div>
        </>}


      </header>
    </>
  )
}

export default MainNavbar

