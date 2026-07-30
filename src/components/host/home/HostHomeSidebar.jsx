import '../../../css/host/home/HostHomeSidebar.css'
import personIcon from '../../../assets/person.png'
import plusIcon from '../../../assets/plus.png'
import { useNavigate } from 'react-router-dom'

const HostHomeSidebar = () => {



  const nav = useNavigate();



  return (
    <>
      <div className="div-dashboard-sidebar">
        <button onClick={() => nav('/create')} className="button-dashboard-create-malmoim">
          <img src={plusIcon} alt="만들기" />
          <span>말모임 만들기</span>
        </button>
        <button onClick={() => nav('/myContent')} className="button-dashboard-my-malmoim">
          <img src={personIcon} alt="내 말모임" />
          <span>내 말모임</span>
        </button>
      </div>
    </>
  )
}

export default HostHomeSidebar
