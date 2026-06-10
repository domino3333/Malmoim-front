
import { useNavigate } from "react-router-dom";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import "../../css/dashboard/MyContentPage.css";
import { useEffect, useState } from "react";
import { getMyRooms } from "../../api/room/roomApi";

const MyContentPage = () => {



    const [rooms, setRooms] = useState([]);

    const nav = useNavigate();


    const clickTab = (destination) => {
        nav(`/${destination}`);
    }

    useEffect(() => {

        const fetchData = async () => {
            const data = await getMyRooms();
            setRooms(data);
        }

        fetchData();

    }, [])

    return (<>
        <DashBoardHeader />

        {/*대쉬보드 전체를 감싸는 body div*/}
        <div className="div-MyContentPage-body">
            <DashBoardSideBar clickTab={clickTab} />
            <div className="div-MyContentPage-content-list">
                <div className="div-content-list">

                    <table>
                        {rooms.map((room) =>
                            <tr key={room.no}>
                                <td>
                                    {room.title}
                                </td>
                                <td>
                                    {room.hostNo}
                                </td>

                            </tr>
                        )}
                    </table>

                </div>
            </div>
        </div>

    </>)
}

export default MyContentPage;