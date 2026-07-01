import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {

    //roominfo에 roomNo, title, code ,hasPassword 내려옴

    console.log("roomfinfo",roomInfo.hasPassword);
    return (<>
        <Modal show={show} contentClassName="Entry-modal">
            <div className="entry-modal-body">
                <h3>방 제목: {roomInfo.title}</h3>
                <p>코드: {roomInfo.code}</p>
                
                {roomInfo.hasPassword && 
                    <div className="entry-modal-password-div">
                        비밀번호:
                        <input type="password" />
                    </div>}

            </div>
        </Modal>
    </>)
}

export default EntryModal;