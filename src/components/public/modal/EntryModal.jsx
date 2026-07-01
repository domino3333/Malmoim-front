import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {

    //roominfo에 roomNo, title, code ,hasPassword 내려옴

    return (<>
        <Modal show={show} contentClassName="Entry-modal">
                <button className="entry-modal-x-button"
                    onClick={onHide}
                >X</button>
                <h3>방 제목: {roomInfo.title}</h3>
                <p className="entry-modal-code-p">코드: {roomInfo.code}</p>

                {roomInfo.hasPassword &&
                    <input className="entry-modal-password-input" type="password" placeholder="비밀번호.." />
                }

                <button className={roomInfo.hasPassword ?"entry-modal-enter-button-v1": "entry-modal-enter-button-v2"}>
                    입장하기
                </button>

        </Modal>
    </>)
}

export default EntryModal;