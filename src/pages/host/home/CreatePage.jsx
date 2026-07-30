import { useNavigate } from "react-router-dom";
import HostHomeHeader from "../../../components/host/home/HostHomeHeader";
import HostHomeSidebar from "../../../components/host/home/HostHomeSidebar";
import "../../../css/host/home/CreatePage.css";

const CreatePage = () => {

    const nav = useNavigate();

    return (<>
        <HostHomeHeader/>

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreatePage-body">
            <HostHomeSidebar />
            <div className="div-CreatePage-content-list">
                <button className="button-create" onClick={()=>nav("/createDetail")}>만들기</button>
            </div>
        </div>

    </>)
}

export default CreatePage;
