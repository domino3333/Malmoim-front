import '../../../css/host/home/HostHomeSidebar.css'
import personIcon from '../../../assets/person.png'
import plusIcon from '../../../assets/plus.png'
import dashboardIcon from '../../../assets/dashboard-icon.png'
import logo from '../../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const HostHomeSidebar = () => {



  const nav = useNavigate();



  return (
    <aside className="host-sidebar">
      <button
        type="button"
        className="host-sidebar__logo-button"
        onClick={() => nav('/')}
      >
        <img className="host-sidebar__logo" src={logo} alt="말모임 로고" />
      </button>

      <nav className="host-sidebar__menu">

        <NavLink to="/dashboard"
          className={({ isActive }) => `host-sidebar__menu-button ${isActive ? "active" : ""}`}
        >
          <img src={dashboardIcon} alt="대시보드" />
          <span>대시보드</span>

        </NavLink>

        <NavLink to="/createDetail"
          className={({ isActive }) => `host-sidebar__menu-button ${isActive ? "active" : ""}`}
        >
          <img src={plusIcon} alt="만들기" />
          <span>말모임 만들기</span>
        </NavLink>

        <NavLink to="/myContent"
          className={({ isActive }) => `host-sidebar__menu-button ${isActive ? "active" : ""}`}
        >
          <img src={personIcon} alt="내 말모임" />
          <span>내 말모임</span>
        </NavLink>
      </nav>
    </aside >
  )
}

export default HostHomeSidebar
