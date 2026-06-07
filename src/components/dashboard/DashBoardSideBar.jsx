import '../../css/dashboard/DashBoardSideBar.css'
import personIcon from '../../assets/person.png'
import plusIcon from '../../assets/plus.png'

const DashBoardSideBar = ({ clickTab }) => {
  return (
    <>
      <div className="div-dashboard-sidebar">
        <button onClick={() => clickTab('create')} className="button-dashboard-create-malmoim">
          <img src={plusIcon} alt="만들기" />
          <span>말모임 만들기</span>
        </button>
        <button onClick={() => clickTab('myContent')} className="button-dashboard-my-malmoim">
          <img src={personIcon} alt="내 말모임" />
          <span>내 말모임</span>
        </button>
      </div>
    </>
  )
}

export default DashBoardSideBar

