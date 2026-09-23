import { useState } from "react";
import "../../../css/host/home/RecentRoomRow.css"
import { Check, Copy } from "lucide-react";

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
                    {room.createdAt}
                </td>
                <td>
                    <button>
                        입장 →
                    </button>

                </td>
            </tr>
        </tbody>
    </>)
}

export default RecentRoomRow;
