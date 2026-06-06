
import "./HostDashboardPage.css"


import DashBoardHeader from "../components/dashboard/DashBoardHeader"
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar"

const HostDashboardPage = () => {


    return (<>

        <DashBoardHeader/>

        {/*헤더 아래의 메인 전체를 감싸는 body div*/}
        <div className="div-dashboard-body">
            <DashBoardSideBar/>
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