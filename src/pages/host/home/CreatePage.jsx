import { useNavigate } from "react-router-dom";
import HomeHeader from "../../../components/host/home/HomeHeader";
import HomeSideBar from "../../../components/host/home/HomeSideBar";
import "../../../css/host/home/CreatePage.css";

const CreatePage = () => {

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <HomeHeader clickTab={clickTab}/>

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreatePage-body">
            <HomeSideBar clickTab={clickTab} />
            <div className="div-CreatePage-content-list">
                <button className="button-create" onClick={()=>clickTab("createDetail")}>만들기</button>
            </div>
        </div>

    </>)
}

export default CreatePage;