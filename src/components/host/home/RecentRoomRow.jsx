import { useState } from "react";
import "../../../css/host/home/RecentRoomRow.css"
import { Check, Copy, Section } from "lucide-react";

const RecentRoomRow = ({ room }) => {


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
                <td>
                    <div className="room-code">
                        <span>{room.code}</span>
                        <button
                            type="button"
                            onClick={handleCopyCode}
                            aria-label="입장 코드 복사"
                            title="입장 코드 복사"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                </td>
                <td>
                    {room.createdAt}
                </td>
                <td>
                    입장 →
                </td>
            </tr>
        </tbody>
    </>)
}

export default RecentRoomRow;
