
import "../../../css/host/home/HostDashboardPage.css"
import HostHomeLayout from "../../../components/host/home/HostHomeLayout"
import { useEffect, useState } from "react"
import { getRecentRooms } from "../../../api/room/roomApi";
import RecentRoomRow from "../../../components/host/home/RecentRoomRow";



const HostDashboardPage = () => {

    const [rooms, setRooms] = useState([]);


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
                    <button className="host-dashboard-create-button"> + 만들기</button>
                </div>
                <div className="host-dashboard-bottom">
                    <h2>최근 만든 말모임</h2>
                    <div className="host-dashboard-all-button">전체보기 → </div>
                </div>
                <table>
                    <thead>
                        <th>
                            <td>방 제목</td>
                            <td>유형</td>
                            <td>입장 코드</td>
                            <td>생성일</td>
                            <td></td>
                        </th>
                    </thead>
                    <tbody>
                        {rooms.map((room) => <RecentRoomRow key={room.roomNo} room={room} />)}
                    </tbody>
                </table>


                

            </div>
        </HostHomeLayout>
    )

}

export default HostDashboardPage;
