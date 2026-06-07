import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/CreatePage.css";


const CreatePage = ()=>{


    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-dashboard-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-dashboard-content-list">
                <p>만들기</p>
            </div>
        </div>

    </>)
}

export default CreatePage;