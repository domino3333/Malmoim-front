
import "../../css/dashboard/HostDashboardPage.css"


import DashBoardHeader from "../../components/dashboard/DashBoardHeader"
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar"
import { useNavigate } from "react-router-dom"



const HostDashboardPage = () => {

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }




    return (<>

        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-dashboard-body">
            <DashBoardSideBar clickTab={clickTab} />
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
