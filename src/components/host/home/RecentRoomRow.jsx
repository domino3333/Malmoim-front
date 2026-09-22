import "../../../css/host/home/RecentRoomRow.css"

const RecentRoomRow = ({ room }) => {

    return (<>

        <tbody>
            <tr>
                <td>
                    {room.title}
                </td>
                <td>
                    {room.type}
                </td>
                <td>
                    {room.code}
                </td>
                <td>
                    {room.createdAt}
                </td>
                <td>
                </td>
            </tr>
        </tbody>
    </>)
}

export default RecentRoomRow;
