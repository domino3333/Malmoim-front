
import "../../../css/host/home/HostHomePage.css"
import HostHomeLayout from "../../../components/host/home/HostHomeLayout"



const HostHomePage = () => {

    return (
        <HostHomeLayout>
            <div className="host-dashboard-page">

                <div className="host-dashboard-top">
                    <div className="host-dashboard-title-text">대시보드</div>
                    <button className="host-dashboard-create-button">만들기</button>
                </div>
                <div className="host-dashboard-bottom">
                    <h2>최근 만든 말모임</h2>
                </div>
            </div>
        </HostHomeLayout>
    )

}

export default HostHomePage;
