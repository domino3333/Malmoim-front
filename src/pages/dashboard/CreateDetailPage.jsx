import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/CreateDetailPage.css";
import audience from "../../assets/audience.png"
import { useState } from "react";
import CreateModal from "../../components/modal/CreateModal";



const CreateDetailPage = () => {

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }


    const [show, setShow] = useState(false);

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreateDetailPage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-CreateDetailPage-content-list">
                <div className="btn-box">
                    <button className="btn1" onClick={() => setShow(true)}>
                        <img src={audience} alt="청중이미지" />
                        <div className="div-qna">
                            청중 QnA
                        </div>
                    </button>

                </div>
            </div>
        </div>

        <CreateModal show={show} setShow={setShow} onHide={()=>setShow(false)} title={"청중QnA"}/>

        

    </>)
}

export default CreateDetailPage;