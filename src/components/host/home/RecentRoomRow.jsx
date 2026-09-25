import { useState } from "react";
import "../../../css/host/home/RecentRoomRow.css"
import { Check, Copy } from "lucide-react";
import { formatLocalDateTime } from "../../../utils/date/formatLocalDateTime";

const RecentRoomRow = ({ room,onEnter }) => {


    const [copied, setCopied] = useState(false);

    const handleCopyCode = async () => {

        try {
            await navigator.clipboard.writeText(room.code);
            setCopied(true);
        } catch {
            window.alert("입장 코드를 복사하지 못했습니다.");
        }
    }


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
                        <button
                            type="button"
                            className="copy-code-button"
                            onClick={handleCopyCode}
                        >
                            {copied ?
                                <Check size={16} className="code-check-icon" />
                                : <Copy size={16} className="code-copy-icon" />}
                        </button>
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
