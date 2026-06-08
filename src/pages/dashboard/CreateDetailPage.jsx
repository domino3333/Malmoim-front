import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/CreateDetailPage.css";
import audience from "../../assets/audience.png"


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
                <button className="btn1">
                    <img src={audience} alt="임시이미지" />
                    <div className="div-qna">
                        청중 QnA
                    </div>
                </button>
            </div>
        </div>

    </>)
}

export default CreateDetailPage;