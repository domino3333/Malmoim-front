import "../../css/public/HomeEntryPanel.css"
import people from "../../assets/people-icon.png"
import home from "../../assets/home-icon.png"
import { useState } from "react"
import { getRoomEntryInfo, verifyRoomPassword, joinRoom } from "../../api/entry/entryApi"
import EntryModal from "./modal/EntryModal"
import NicknameModal from "./modal/NicknameModal"
import { Link, useNavigate } from "react-router-dom"

const HomeEntryPanel = () => {


    const [code, setCode] = useState("");
    const [roomInfo, setRoomInfo] = useState(null);
    const [password, setPassword] = useState("");

    const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
    const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
    const [isCheckingCode, setIsCheckingCode] = useState(false);
    const [isVerifyingPassword, setIsVerifyingPassword] = useState(false);
    const [isJoining, setIsJoining] = useState(false);

    const [passwordCheckResponse, setPasswordCheckResponse] = useState(null);

    const nav = useNavigate();

    // 사용자가 입력한 입장 코드의 상태 반영
    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    // 입장 코드 기반 방 정보 조회 및 입장 모달 표시
    const handleCodeSubmit = async () => {
        if (isCheckingCode) return;
        setIsCheckingCode(true);
        try {
            const data = await getRoomEntryInfo(code.trim().toUpperCase());
            setRoomInfo(data);
            setIsEntryModalOpen(true);

        } catch (e) {
            const message = e.response?.data;
            alert(e.response?.status < 500 && typeof message === "string" && message.trim()
                ? message : "방 정보를 확인하지 못했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsCheckingCode(false);
        }
    }

    // "다음" 버튼 클릭
    // 방 비밀번호 검증 및 닉네임 입력 단계 이동
    const handleEntryNext = async (roomNo, password, hasPassword) => {
        if (isVerifyingPassword) return;
        setIsVerifyingPassword(true);
        try {
            if (hasPassword) {
                const response = await verifyRoomPassword(roomNo, password);
                setPasswordCheckResponse(response);
            }
            setIsEntryModalOpen(false);
            setIsNicknameModalOpen(true);
        } catch (e) {
            const message = e.response?.data;
            alert(e.response?.status < 500 && typeof message === "string" && message.trim()
                ? message : "비밀번호를 확인하지 못했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsVerifyingPassword(false);
        }


    }

    // "입장하기" 버튼 클릭
    // 참가자 저장 및 Q&A 참여자 페이지 이동, 토큰 저장
    const handleJoinRoom = async (roomNo, nickname) => {
        if (isJoining) return;
        setIsJoining(true);
        try {
            const data = await joinRoom(roomNo, nickname, password);
            nav(`/qna/${roomNo}`);
        } catch (e) {
            const message = e.response?.data;
            alert(e.response?.status < 500 && typeof message === "string" && message.trim()
                ? message : "입장 결과를 확인하지 못했습니다. 연결 상태를 확인한 뒤 다시 시도해주세요.");
        } finally {
            setIsJoining(false);
        }
    }




    return (<>

        <div className="home-entry">
            <div className="home-entry__participant">
                <img src={people} alt="people-icon" />
                <h2>참여자이신가요?</h2>
                <p className="home-entry__guide">입장코드를 입력하고 실시간 Q&A에 참여하세요</p>
                <div className="home-entry__code-row">
                    <input disabled={isCheckingCode} onChange={handleCodeChange} type="text" name="code" className="home-entry__code" />
                    <button disabled={isCheckingCode} aria-busy={isCheckingCode} onClick={handleCodeSubmit} className="home-entry__code-submit">→</button>
                </div>
                <div className="home-entry__participant-tip">
                    입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
            <div className="home-entry__host">
                <img src={home} alt="" />
                <h2>방을 직접 만들기</h2>
                <p className="home-entry__guide">로그인 후 방을 만들고 진행할 수 있어요</p>
                <button className="home-entry__host-start" onClick={()=>nav("/login")}>
                    호스트로 시작
                </button>
                <div className="home-entry__host-tip">
                    입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
        </div>


        {roomInfo && <EntryModal onNext={handleEntryNext} isVerifyingPassword={isVerifyingPassword} password={password} setPassword={setPassword} roomInfo={roomInfo} show={isEntryModalOpen} onHide={() => setIsEntryModalOpen(false)} />}

        {roomInfo && <NicknameModal onJoin={handleJoinRoom} isJoining={isJoining} roomInfo={roomInfo} show={isNicknameModalOpen} onHide={() => setIsNicknameModalOpen(false)} />}
    </>)
}
export default HomeEntryPanel;
