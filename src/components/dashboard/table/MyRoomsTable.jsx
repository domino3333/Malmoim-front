
import "../../../css/dashboard/MyRoomsTable.css"



const MyRoomsTable = ({ rooms }) => {

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
                {rooms.map((room) =>
                    <tr key={room.no} className="div-myRoomsTable-tr">
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
                            {room.status === "opened" ? "공개" : "비공개"}
                        </td>

                    </tr>
                )}
            </tbody>


        </table>
    </>)
}

export default MyRoomsTable;