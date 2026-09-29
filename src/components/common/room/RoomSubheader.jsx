import { useState } from "react";
import { Check, Copy } from "lucide-react";
import "../../../css/common/room/RoomSubheader.css"

const RoomSubheader = ({ roomInfo }) => {
    const [copiedCode, setCopiedCode] = useState(null);
    const copied = Boolean(roomInfo.code) && copiedCode === roomInfo.code;

    // 입장 코드 복사하고 성공하면 체크 아이콘으로 바꾸기
    const handleCopyCode = async () => {
        const code = roomInfo.code;
        if (!code) return;

        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(code);
        } catch {
            window.alert("입장 코드를 복사하지 못했습니다.");
        }
    };

    return (<>

        <div className="room-subheader">
            <div className="room-subheader__fields">
                <div className="room-subheader__title">
                    방 제목: {roomInfo.title}
                </div>
                <div className="room-subheader__code">
                    <span>입장 코드: {roomInfo.code}</span>
                    <button
                        type="button"
                        className="room-subheader__copy-button"
                        onClick={handleCopyCode}
                        disabled={!roomInfo.code}
                        aria-label={copied ? "입장 코드 복사됨" : "입장 코드 복사"}
                        title={copied ? "복사됨" : "입장 코드 복사"}
                    >
                        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                    </button>
                </div>
                <div className="room-subheader__visibility">
                    공개 여부: {roomInfo.visibility === "PUBLIC" ? "공개방" : "비밀방"}
                </div>
            </div>
        </div>

    </>)
}

export default RoomSubheader;
