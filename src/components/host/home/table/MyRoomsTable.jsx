
import "../../../../css/host/home/MyRoomsTable.css"



const MyRoomsTable = ({ rooms, onRoomClick }) => {

    return (<>

        <table className="div-myRoomsTable">

            <thead className="div-myRoomsTable-thead">
                <tr>
                    <th>제목</th>
                    <th>정원</th>
                    <th>종류</th>
                    <th>상태</th>
                </tr>
            </thead>

            <tbody>
                {/* room.no는 room 테이블 PK */}
                {rooms.map((room) =>
                    <tr key={room.no} className="div-myRoomsTable-tr"
                        onClick={()=>onRoomClick(room.no)}>
                        <td className="myRoomsTable-title">
                            {room.title}
                        </td>
                        <td className="myRoomsTable-capacity">
                            {room.capacity}
                        </td>
                        <td className="myRoomsTable-type">
                            {room.type}
                        </td>
                        <td className="myRoomsTable-status">
                            {room.visibility === "PUBLIC" ? "공개" : "비공개"}
                        </td>

                    </tr>
                )}
            </tbody>


        </table>
    </>)
}

export default MyRoomsTable;
