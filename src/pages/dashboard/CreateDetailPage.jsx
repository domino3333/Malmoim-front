import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/CreateDetailPage.css";


const CreateDetailPage = ()=>{

     const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreateDetailPage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-CreateDetailPage-content-list">
                <p>카드 그리드 여러개</p>
            </div>
        </div>

    </>)
}

export default CreateDetailPage;