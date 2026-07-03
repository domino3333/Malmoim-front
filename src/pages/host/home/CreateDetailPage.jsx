import { useNavigate } from "react-router-dom";
import HostHomeHeader from "../../../components/host/home/HostHomeHeader";
import HostHomeSideBar from "../../../components/host/home/HostHomeSideBar";
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
        <HostHomeHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-CreateDetailPage-body">
            <HostHomeSideBar clickTab={clickTab} />
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
