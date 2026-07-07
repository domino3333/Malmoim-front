import { Modal } from "react-bootstrap";
import "../../../css/public/modal/NickNameModal.css"
import { useState } from "react";


const NickNameModal = ({ clickEnter, roomInfo, show, onHide }) => {


    const [nickname, setNickname] = useState("");


    const observeInput = (e) => {
        const { value } = e.target;
        setNickname(value);
    }





    return (<>
        <Modal show={show} contentClassName="Nickname-modal">
            <button className="nickname-modal-x-button"
                onClick={onHide}
            >X</button>
            <h3>{roomInfo.title}</h3>
            <p className="nickname-modal-code-p">코드: {roomInfo.code}</p>
            <p className="nickname-modal-capacity-p">정원: (현재정원표기 구현예정)/{roomInfo.capacity}</p>

            <input
                onChange={observeInput}
                className="nickname-input"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력하세요" />


            <button
                onClick={()=>clickEnter(roomInfo.roomNo,nickname)}
                className={roomInfo.hasPassword ? "nickname-modal-enter-button-v1" : "nickname-modal-enter-button-v2"}>
                입장하기
            </button>

        </Modal>
    </>)
}

export default NickNameModal;