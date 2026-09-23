
import "../../../css/host/home/HostDashboardPage.css"
import HostHomeLayout from "../../../components/host/home/HostHomeLayout"
import { useEffect, useState } from "react"
import { getRecentRooms } from "../../../api/room/roomApi";
import RecentRoomRow from "../../../components/host/home/RecentRoomRow";
import { useNavigate } from "react-router-dom";



const HostDashboardPage = () => {

    const [rooms, setRooms] = useState([]);


    const nav = useNavigate();


    const handleEnterRoom = (roomNo)=>{
        nav(`/qna/${roomNo}/host`);

    }

    useEffect(() => {

        const fetchRooms = async () => {

            const data = await getRecentRooms();
            setRooms(data);

        }

        fetchRooms();

    }, [])


    return (
        <HostHomeLayout>
            <div className="host-dashboard-page">

                <div className="host-dashboard-top">
                    <div className="host-dashboard-title-text">대시보드</div>
                    <button
                    className="host-dashboard-create-button"
                    onClick={()=>nav('/createDetail')}
                    > + 말모임 만들기</button>
                </div>
                <div className="host-dashboard-bottom">
                    <h2>최근 만든 말모임</h2>
                    <div 
                    className="host-dashboard-all-button"
                    onClick={()=>nav('/myContent')}
                    
                    >전체보기 → </div>
                </div>
                <table className="host-dashboard-table">
                    <thead>
                        <tr id="host-dashboard-table-th">
                            <th>방 제목</th>
                            <th>유형</th>
                            <th>입장 코드</th>
                            <th>생성일</th>
                            <th></th>
                        </tr>
                    </thead>
                    {rooms.map((room) => <RecentRoomRow key={room.roomNo} room={room} onEnter={handleEnterRoom}/>)}
                </table>
            </div>
        </HostHomeLayout>
    )

}

export default HostDashboardPage;
