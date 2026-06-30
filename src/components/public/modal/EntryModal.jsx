import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {


    return (<>
        <Modal show={show} contentClassName="Entry-modal">
            <div className="entry-modal-body">
                <h3>{roomInfo.title}</h3>
                <p>ㅇㅇㅇ</p>


            </div>
        </Modal>
    </>)
}

export default EntryModal;