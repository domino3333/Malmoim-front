import "../../../css/host/home/RecentRoomRow.css"
import CopyCodeButton from "../../common/room/CopyCodeButton";
import { formatLocalDateTime } from "../../../utils/date/formatLocalDateTime";

const RecentRoomRow = ({ room,onEnter }) => {

    return (<>

        <tbody>
            <tr>
                <td>
                    {room.title}
                </td>
                <td>
                    {room.type}
                </td>
                <td className="room-code-tr">
                    <div className="room-code">
                        <span className="room-code-span" >{room.code}</span>
                        <CopyCodeButton code={room.code} className="copy-code-button" />
                    </div>
                </td>
                <td>
                    {formatLocalDateTime(room.createdAt)}
                </td>
                <td>
                    <button className="RecentRoomRow-enter-button" onClick={()=>onEnter(room.roomNo)}>
                        입장하기
                    </button>

                </td>
            </tr>
        </tbody>
    </>)
}

export default RecentRoomRow;
