import "../../../css/host/home/HostHomeLayout.css"
import HostHomeHeader from "./HostHomeHeader"
import HostHomeSidebar from "./HostHomeSidebar"

const HostHomeLayout = ({ children }) => {

    return (
        <div className="host-home-layout">
            <HostHomeSidebar />
            <div className="host-home-layout-main">
                <HostHomeHeader />
                <main className="host-home-layout-content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default HostHomeLayout
