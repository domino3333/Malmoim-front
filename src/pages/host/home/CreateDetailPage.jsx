import { useNavigate } from "react-router-dom";
import HomeHeader from "../../../components/host/home/HomeHeader";
import HomeSideBar from "../../../components/host/home/HomeSideBar";
import "../../../css/host/home/CreateDetailPage.css";
import audience from "../../../assets/audience.png"
import { useState } from "react";
import CreateModal from "../../../components/host/modal/CreateModal";



const CreateDetailPage = () => {

    const nav = useNavigate();

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }


    const [show, setShow] = useState(false);

    return (<>
        <HomeHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreateDetailPage-body">
            <HomeSideBar clickTab={clickTab} />
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

        <CreateModal show={show} onHide={()=>setShow(false)} title={"청중QnA"}/>

        

    </>)
}

export default CreateDetailPage;