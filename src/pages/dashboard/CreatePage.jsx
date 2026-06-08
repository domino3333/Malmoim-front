import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/CreatePage.css";

const CreatePage = ()=>{

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreatePage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-CreatePage-content-list">
                <button className="button-create">만들기</button>
            </div>
        </div>

    </>)
}

export default CreatePage;