
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

        {/*?ㅻ뜑 ?꾨옒??硫붿씤 ?꾩껜瑜?媛먯떥??body div*/}
        <div className="div-dashboard-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-dashboard-content-list">
                <table>
                    <tr>
                        <td>?꾩떆1</td>
                    </tr>
                    <tr>
                        <td>?꾩떆2</td>
                    </tr>
                    <tr>
                        <td>?꾩떆3</td>
                    </tr>
                </table>
            </div>
        </div>
    </>)

}

export default HostDashboardPage;
