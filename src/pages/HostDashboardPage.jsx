
import "./HostDashboardPage.css"
import logo from "../assets/logo.png"
import personIcon from "../assets/person.png"
import plusIcon from "../assets/plus.png"

const HostDashboardPage = () => {


    return (<>

        <header className="header-HostDashboardPage">
            <img src={logo} alt="로고" />
            <div>
                사용자 정보 버튼
            </div>
        </header>

        {/*헤더 아래의 메인 전체를 감싸는 body div*/}
        <div className="div-dashboard-body">
            <div className="div-dashboard-sidebar">
                <button className="button-dashboard-create-malmoim">
                    <img src={plusIcon} alt="만들기" />
                    <span>말모임 만들기</span>
                </button>
                <button className="button-dashboard-my-malmoim">
                    <img src={personIcon} alt="내 말모임" />
                    <span>내 말모임</span>
                </button>
            </div>
            <div className="div-dashboard-content-list">
                <table>
                    <tr>
                        <td>임시1</td>
                    </tr>
                    <tr>
                        <td>임시2</td>
                    </tr>
                    <tr>
                        <td>임시3</td>
                    </tr>
                </table>
            </div>
        </div>
    </>)
}

export default HostDashboardPage;