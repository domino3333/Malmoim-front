
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


    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;


    const [totalDataCount, setTotalDataCount] = useState(0);

    const totalPage = Math.ceil(totalDataCount / pageSize)


    const blockSize = 5;
    const startBlock = Math.floor((currentPage - 1) / blockSize) * blockSize + 1;
    const endBlock = Math.min(startBlock + blockSize - 1, totalPage);

    const pages = Array.from(
        { length: endBlock - startBlock + 1 }
        , (_, i) => startBlock + i
    );

    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    const prevClicked = () => {

        //현재 블럭이 7이면
        //이전 버튼을 눌렀을 때 첫블럭1로 가면서 1페이지로 바꾸면됨
        //그러면 현재 블럭으로 이전과 이후의 블럭을 구해야 하는 게 관건

        if (startBlock === 1) return;

        const newStartBlock = startBlock - blockSize;
        const newEndBlock = endBlock - blockSize;

        setCurrentPage(newStartBlock);

    }
    const nextClicked = () => {
        if (endBlock === 1) return;

        const newStartBlock = startBlock + blockSize;
        const newEndBlock = endBlock + blockSize;

        setCurrentPage(newStartBlock);

    }


    useEffect(() => {

        const fetchData = async () => {
            const data = await getMyRooms(currentPage, pageSize);
            setRooms(data.rooms);
            setTotalDataCount(data.totalCount);
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


                    {startBlock !== 1 &&
                        <button className="button-prev" onClick={prevClicked}>
                            &lt;
                        </button>
                    }



                    {pages.map((page, index) =>
                        <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                    )}


                    {(totalPage > endBlock) &&
                        <button className="button-next" onClick={nextClicked}>
                            &gt;
                        </button>}



                </div>
            </div>
        </div>

    </>)
}

export default MyContentPage;