
import "../../../css/host/home/HostHomePage.css"
import HostHomeLayout from "../../../components/host/home/HostHomeLayout"



const HostHomePage = () => {

    return (
        <HostHomeLayout>
            <div className="host-dashboard-page">

                <div className="host-dashboard-top">
                    <div className="host-dashboard-title-text">대시보드</div>
                    <button className="host-dashboard-create-button"> + 만들기</button>
                </div>
                <div className="host-dashboard-bottom">
                    <h2>최근 만든 말모임</h2>
                    <div className="host-dashboard-all-button">전체보기 → </div>
                </div>
                <div className="host-dashboard-content-list-table">
                    <div className="host-dashboard-content-list-header">
                        <p>방 제목</p>
                        <p>유형</p>
                        <p>입장 코드</p>
                        <p>생성일</p>
                    </div>
                    <div className="host-dashboard-content-list-body">
                        {/* map으로 돌려서 다섯 줄 만들기 */}
                    </div>

                </div>
            </div>
        </HostHomeLayout>
    )

}

export default HostHomePage;
