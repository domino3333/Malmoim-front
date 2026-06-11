
import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/MyContentPage.css";
import { useEffect, useState } from "react";
import { getMyRooms } from "../../api/room/roomApi";
import { Plus, Search, X } from "lucide-react";
import MyRoomsTable from "../../components/dashboard/table/MyRoomsTable";

const MyContentPage = () => {



    const [rooms, setRooms] = useState([]);

    const nav = useNavigate();

    const [activeTab, setActiveTab] = useState("all");


    const [currentPage,setCurrentPage] =useState(1);
    const pageSize = 5;

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    useEffect(() => {

        const fetchData = async () => {
            const data = await getMyRooms(currentPage,5);
            setRooms(data);
        }

        fetchData();

    }, [currentPage])

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-MyContentPage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-MyContentPage-content-list">
                <div className="div-content">

                        <div className="div-content-head-main">

                            <div className="div-content-head-left">
                                <button className={activeTab === "all" ? "activeTab" : "tab"}
                                    onClick={() => setActiveTab("all")}
                                >
                                    모두
                                </button>
                                <button className={activeTab === "private" ? "activeTab" : "tab"}
                                    onClick={() => setActiveTab("private")}>
                                    비공개
                                </button>
                            </div>

                            <div className="div-content-head-right">
                                <button className="button-head-create">
                                    + 방 만들기
                                </button>
                            </div>

                        </div>
                        <div className="div-content-search-box">
                            <input
                                type="text"
                                name="search-box"
                                placeholder="방 제목"
                            />
                            <button type="button" className="search-button">
                                <Search size={20} className="search-icon" />
                            </button>
                        </div>


                        <MyRoomsTable rooms={rooms} />


                </div>
            </div>
        </div>

    </>)
}

export default MyContentPage;