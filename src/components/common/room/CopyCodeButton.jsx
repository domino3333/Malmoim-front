import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Copy } from "lucide-react";
import "../../../css/common/room/CopyCodeButton.css";

const CopyCodeButton = ({ code, className }) => {
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);

    // 페이지 나가면 남아 있는 알림 타이머 정리하기
    useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

    // 다시 복사하면 그때부터 2초 동안 메시지 보여주기
    const showMessage = (text) => {
        window.clearTimeout(timeoutRef.current);
        setMessage(text);
        timeoutRef.current = window.setTimeout(() => setMessage(""), 2000);
    };

    const handleCopyCode = async () => {
        if (!code) return;

        try {
            await navigator.clipboard.writeText(code);
            showMessage("입장 코드가 복사됐습니다.");
        } catch {
            showMessage("입장 코드를 복사하지 못했습니다.");
        }
    };

    return (
        <>
            <button
                type="button"
                className={className}
                onClick={handleCopyCode}
                disabled={!code}
                aria-label="입장 코드 복사"
                title="입장 코드 복사"
            >
                <Copy size={16} aria-hidden="true" />
            </button>
            {message && createPortal(
                <div className="entry-copy-toast" role="status" aria-live="polite">
                    {message}
                </div>,
                document.body
            )}
        </>
    );
};

export default CopyCodeButton;
