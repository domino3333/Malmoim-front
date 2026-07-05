
import "../../../css/host/home/HostHomePage.css"


import HostHomeHeader from "../../../components/host/home/HostHomeHeader"
import HostHomeSideBar from "../../../components/host/home/HostHomeSideBar"
import { useNavigate } from "react-router-dom"



const HostHomePage = () => {

    



    return (<>

        <HostHomeHeader/>

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-dashboard-body">
            <HostHomeSideBar/>
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

export default HostHomePage;
