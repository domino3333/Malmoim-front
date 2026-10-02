import "../../../css/host/home/HostHomeLayout.css"
import HostHeader from "../common/HostHeader"
import HostHomeSidebar from "./HostHomeSidebar"

const HostHomeLayout = ({ children }) => {

    return (
        <div className="host-home-layout">
            <HostHomeSidebar />
            <div className="host-home-layout-main">
                <HostHeader />
                <main className="host-home-layout-content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default HostHomeLayout
