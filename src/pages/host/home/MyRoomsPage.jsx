
import { useNavigate } from "react-router-dom";
import HostHomeLayout from "../../../components/host/home/HostHomeLayout";
import "../../../css/host/home/MyRoomsPage.css";
import { useEffect, useState } from "react";
import { getMyRooms } from "../../../api/room/roomApi";
import { Plus, Search, X } from "lucide-react";
import MyRoomsTable from "../../../components/host/home/MyRoomsTable";
import { searchRoom } from "../../../api/qna/hostQnaApi";

const MyRoomsPage = () => {



    //방 리스트
    const [rooms, setRooms] = useState([]);

    const nav = useNavigate();

    //활성화된 탭 디폴트: "모두"
    const [activeTab, setActiveTab] = useState("all");

    const [searchKeyword, setSearchKeyword] = useState();


    // 현재 페이지 넘버 디폴트:1페이지
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;


    //총 데이터 카운트를 서버로부터 내려받아 저장
    const [totalRoomCount, setTotalRoomCount] = useState(0);

    const totalPages = Math.ceil(totalRoomCount / pageSize)


    // 블럭 사이즈
    const blockSize = 5;
    const blockStartPage = Math.floor((currentPage - 1) / blockSize) * blockSize + 1;
    const blockEndPage = Math.min(blockStartPage + blockSize - 1, totalPages);

    //첫블럭과 마지막 블럭의 숫자를 이용하여 페이지들 넘버 배열 만들기
    const pages = Array.from(
        { length: blockEndPage - blockStartPage + 1 }
        , (_, i) => blockStartPage + i
    );


    // 선택한 방의 호스트 Q&A 페이지 이동
    const handleRoomRowClick = (roomNo) => {
        nav(`/qna/${roomNo}/host`);

    }
    // 이전 페이지 block의 첫 페이지 이동
    const handlePreviousBlock = () => {

        //현재 블럭이 7이면
        //이전 버튼을 눌렀을 때 첫블럭1로 가면서 1페이지로 바꾸면됨
        //그러면 현재 블럭으로 이전과 이후의 블럭을 구해야 하는 게 관건

        if (blockStartPage === 1) return;

        const newStartBlock = blockStartPage - blockSize;

        setCurrentPage(newStartBlock);

    }
    // 다음 페이지 block의 첫 페이지 이동
    const handleNextBlock = () => {
        if (blockEndPage === totalPages) return;

        const newStartBlock = blockStartPage + blockSize;

        setCurrentPage(newStartBlock);

    }


    const observeSearchInput = (e) => {

        const value = e.target.value;
        setSearchKeyword(value);

    }

    //방 제목으로 검색하기
    const handleSearchRoom = async () => {

        const data = await searchRoom(searchKeyword);
        setRooms(data.rooms);
        setTotalRoomCount(data.totalRoomCount);


    }


    useEffect(() => {

        // 현재 페이지에 표시할 호스트의 방 목록 조회
        const fetchRooms = async () => {
            const data = await getMyRooms(currentPage, pageSize);
            setRooms(data.rooms);
            setTotalRoomCount(data.totalRoomCount);
        }

        fetchRooms();

    }, [currentPage])

    return (
        <HostHomeLayout>
            <div className="my-rooms-page">
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
                            <button className="button-head-create" onClick={() => nav("/createDetail")}>
                                + 방 만들기
                            </button>
                        </div>

                    </div>
                    <div className="div-content-search-box">
                        <input
                            type="text"
                            name="search-box"
                            onChange={observeSearchInput}
                            placeholder="방 제목"
                        />
                        <button onClick={handleSearchRoom} type="button" className="search-button">
                            <Search size={20} className="search-icon" />
                        </button>
                    </div>


                    <MyRoomsTable rooms={rooms} onRoomClick={handleRoomRowClick} />


                    <div className="div-paging-button-box">

                        <button
                            className="button-prev"
                            onClick={handlePreviousBlock}
                            disabled={blockStartPage === 1}
                        >
                            &lt; 이전
                        </button>


                        {pages.map((page, index) =>
                            <button className={currentPage === page ? "button-page-active" : "button-page"} key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                        )}


                        <button
                            className="button-next"
                            onClick={handleNextBlock}
                            disabled={(totalPages <= blockEndPage)}
                        >
                            이후 &gt;
                        </button>

                    </div>




                </div>
            </div>
        </HostHomeLayout>
    )
}

export default MyRoomsPage;
