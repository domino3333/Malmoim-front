import "../../css/public/HomeEntryPanel.css"
import people from "../../assets/people-icon.png"
import home from "../../assets/home-icon.png"
import { useState } from "react"
import { checkRoomCode, checkRoomPassword, joinRoom } from "../../api/entry/entryApi"
import EntryModal from "./modal/EntryModal"
import NicknameModal from "./modal/NicknameModal"
import { useNavigate } from "react-router-dom"

const HomeEntryPanel = () => {


    const [code, setCode] = useState("");
    const [roomInfo, setRoomInfo] = useState(null);

    const [entryModalShow, setEntryModalShow] = useState(false);
    const [nicknameModalShow, setNicknameModalShow] = useState(false);

    const [passwordCheckResponse, setPasswordCheckResponse] = useState(null);

    const nav = useNavigate();

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    const handleCodeSubmit = async () => {
        try {
            const data = await checkRoomCode(code.trim().toUpperCase());
            setRoomInfo(data);
            setEntryModalShow(true);

        } catch (e) {
            console.log(e);
            alert("존재하지 않는 입장 코드입니다.");
        }
    }

    // "다음" 버튼 클릭
    const handleEntryNext = async (roomNo, password, hasPassword) => {

        try {
            if(hasPassword){
                const response = await checkRoomPassword(roomNo, password);
                setPasswordCheckResponse(response);
            }
            setEntryModalShow(false);
            setNicknameModalShow(true);
        } catch (e) {
            alert("비밀번호 불일치");
        }


    }

    // "입장하기" 버튼 클릭
    const handleJoinRoom = async (roomNo,nickname)=>{
        
        const data = await joinRoom(roomNo,nickname);
        
        nav(`/qna/${roomNo}`);
    }




    return (<>

        <div className="HomeEntryPanel-main-parent">
            <div className="HomeEntryPanel-left-panel">
                <img src={people} alt="people-icon" />
                <h2>참여자이신가요?</h2>
                <p className="panel-guide-text">입장코드를 입력하고 실시간 Q&A에 참여하세요</p>
                <div className="left-panel-input-div">
                    <input onChange={handleCodeChange} type="text" name="code" className="code-input" />
                    <button onClick={handleCodeSubmit} className="code-input-arrow-button">→</button>
                </div>
                <div className="left-panel-advice-div">
                    입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
            <div className="HomeEntryPanel-right-panel">
                <img src={home} alt="" />
                <h2>방을 직접 만들기</h2>
                <p className="panel-guide-text">로그인 후 방을 만들고 진행할 수 있어요</p>
                <button className="host-start-button">
                    호스트로 시작
                </button>
                <div className="right-panel-advice-div">
                    입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
        </div>


        {roomInfo && <EntryModal onNext={handleEntryNext} roomInfo={roomInfo} show={entryModalShow} onHide={() => setEntryModalShow(false)} />}

        {roomInfo && <NicknameModal onJoin={handleJoinRoom} roomInfo={roomInfo} show={nicknameModalShow} onHide={() => setNicknameModalShow(false)} />}
    </>)
}
export default HomeEntryPanel;
