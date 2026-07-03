import { useNavigate } from "react-router-dom";
import HostHomeHeader from "../../../components/host/home/HostHomeHeader";
import HostHomeSideBar from "../../../components/host/home/HostHomeSideBar";
import "../../../css/host/home/CreatePage.css";

const CreatePage = () => {

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <HostHomeHeader clickTab={clickTab}/>

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreatePage-body">
            <HostHomeSideBar clickTab={clickTab} />
            <div className="div-CreatePage-content-list">
                <button className="button-create" onClick={()=>clickTab("createDetail")}>만들기</button>
            </div>
        </div>

    </>)
}

export default CreatePage;
