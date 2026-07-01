import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {

    //roominfo에 roomNo, title, hasPassword 내려옴

    return (<>
        <Modal show={show} contentClassName="Entry-modal">
            <div className="entry-modal-body">
                <h3>방 제목: {roomInfo.title}</h3>
                <p></p>


            </div>
        </Modal>
    </>)
}

export default EntryModal;