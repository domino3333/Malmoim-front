
import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/MyContentPage.css";
import { useEffect, useState } from "react";
import { getMyRooms } from "../../api/room/roomApi";
import { Plus, Search, X } from "lucide-react";
import MyRoomsTable from "../../components/dashboard/table/MyRoomsTable";

const MyContentPage = () => {



    //방 리스트
    const [rooms, setRooms] = useState([]);

    const nav = useNavigate();

    //활성화된 탭 디폴트: "모두"
    const [activeTab, setActiveTab] = useState("all");


    // 현재 페이지 넘버 디폴트:1페이지
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;


    //총 데이터 카운트를 서버로부터 내려받아 저장
    const [totalDataCount, setTotalDataCount] = useState(0);

    const totalPage = Math.ceil(totalDataCount / pageSize)


    // 블럭 사이즈
    const blockSize = 5;
    const startBlock = Math.floor((currentPage - 1) / blockSize) * blockSize + 1;
    const endBlock = Math.min(startBlock + blockSize - 1, totalPage);

    //첫블럭과 마지막 블럭의 숫자를 이용하여 페이지들 넘버 배열 만들기
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

        setCurrentPage(newStartBlock);

    }
    const nextClicked = () => {
        if (endBlock === totalPage) return;

        const newStartBlock = startBlock + blockSize;

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
                            <button className="button-head-create" onClick={()=>clickTab("createDetail")}>
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


                    <div className="div-paging-button-box">

                        <button
                            className="button-prev"
                            onClick={prevClicked}
                            disabled={startBlock === 1}
                        >
                            &lt; 이전
                        </button>


                        {pages.map((page, index) =>
                            <button className={currentPage === page ? "button-page-active" : "button-page"} key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                        )}


                        <button 
                            className="button-next" 
                            onClick={nextClicked}
                            disabled={(totalPage <= endBlock)}
                        >
                            이후 &gt;
                        </button>

                    </div>




                </div>
            </div>
        </div>

    </>)
}

export default MyContentPage;