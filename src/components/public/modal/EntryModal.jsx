import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"
import { useState } from "react";


const EntryModal = ({ clickNext,roomInfo, show, onHide }) => {

    //roominfo에 roomNo, title, code ,hasPassword 내려옴

    const [password,setPassword] =useState("");

    const observePassword = (e)=>{
        //const { value } = e.target;
        setPassword(e.target.value);
        
    }

    return (<>
        <Modal show={show} contentClassName="Entry-modal">
                <button className="entry-modal-x-button"
                    onClick={onHide}
                >X</button>
                <h3>{roomInfo.title}</h3>
                <p className="entry-modal-code-p">코드: {roomInfo.code}</p>
                <p className="entry-modal-capacity-p">정원: (현재정원표기 구현예정)/{roomInfo.capacity}</p>

                {roomInfo.hasPassword &&
                    <input className="entry-modal-password-input" onChange={observePassword} type="password" placeholder="비밀번호.." />
                }

                <button onClick={()=>clickNext(roomInfo.roomNo,password)} className={roomInfo.hasPassword ?"entry-modal-enter-button-v1": "entry-modal-enter-button-v2"}>
                    다음
                </button>

        </Modal>
    </>)
}

export default EntryModal;