import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {

    //roominfo에 roomNo, title, code ,hasPassword 내려옴

    return (<>
        <Modal show={show} contentClassName="Entry-modal">
            <div className="entry-modal-body">
                <button className="entry-modal-x-button"
                    onClick={onHide}
                >X</button>
                <h3>방 제목: {roomInfo.title}</h3>
                <p className="entry-modal-code-p">코드: {roomInfo.code}</p>

                {roomInfo.hasPassword &&
                    <input className="entry-modal-password-input" type="password" placeholder="비밀번호.." />
                }

                <button className="entry-modal-enter-button">
                    입장하기
                </button>

            </div>
        </Modal>
    </>)
}

export default EntryModal;