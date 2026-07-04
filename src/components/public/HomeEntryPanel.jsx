
import "../../css/public/HomeEntryPanel.css"
import people from "../../assets/people-icon.png"
import home from "../../assets/home-icon.png"
import { useState } from "react"
import { checkRoomCode, checkRoomPassword } from "../../api/entry/entryApi"
import EntryModal from "./modal/EntryModal"
import NickNameModal from "./modal/NickNameModal"

const HomeEntryPanel = () => {


    const [code, setCode] = useState("");
    const [roomInfo, setRoomInfo] = useState(null);

    const [entryModalShow, setEntryModalShow] = useState(false);
    const [nicknameModalShow, setNicknameModalShow] = useState(false);

    const [passwordCheckResponse,setPasswordCheckResponse] = usesState(null);


    const observeCode = (e) => {
        setCode(e.target.value);
    }

    const sendCode = async () => {
        try {
            const data = await checkRoomCode(code.trim().toUpperCase());
            setRoomInfo(data);
            setEntryModalShow(true);

        } catch (e) {
            console.log(e);
            alert("존재하지 않는 입장 코드입니다.");
        }
    }

    const clickNext = async (password) => {

        try{
            const result = await checkRoomPassword(password);
            setPasswordCheckResponse(result);
        }catch(e){
            alert(e);
        }

        setEntryModalShow(false);
        setNicknameModalShow(true);
    }




    return (<>

        <div className="HomeEntryPanel-main-parent">
            <div className="HomeEntryPanel-left-pannel">
                <img src={people} alt="people-icon" />
                <h2>참여자이신가요?</h2>
                <p className="panel-guide-text">입장코드를 입력하고 실시간 Q&A에 참여하세요</p>
                <div className="left-panel-input-div">
                    <input onChange={observeCode} type="text" name="code" className="code-input" />
                    <button onClick={sendCode} className="code-input-arrow-button">→</button>
                </div>
                <div className="left-panel-advice-div">
                    입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
            <div className="HomeEntryPanel-right-pannel">
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


        {roomInfo && <EntryModal clickNext={clickNext} roomInfo={roomInfo} show={entryModalShow} onHide={() => setEntryModalShow(false)} />}

        {roomInfo && <NickNameModal roomInfo={roomInfo} show={nicknameModalShow} onHide={() => setNicknameModalShow(false)} />}
    </>)
}
export default HomeEntryPanel;