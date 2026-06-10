



const MyRoomsTable = ({rooms}) => {

    return (<>

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
    </>)
}

export default MyRoomsTable;