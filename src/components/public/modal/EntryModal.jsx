import { Modal } from "react-bootstrap";
import "../../../css/public/modal/EntryModal.css"


const EntryModal = ({ roomInfo, show, onHide }) => {


    return (<>
        <Modal contentClassName="Entry-modal">
            <div className="entry-modal-body">
                <h3>{roomInfo.title}</h3>
                


            </div>
        </Modal>
    </>)
}

export default EntryModal;