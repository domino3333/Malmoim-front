
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/MyContentPage.css";

const MyContentPage = ()=>{

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-MyContentPage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-MyContentPage-content-list">
                <p>내 말모임</p>
            </div>
        </div>

    </>)
}

export default MyContentPage;