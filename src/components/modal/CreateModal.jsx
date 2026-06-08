import { Modal } from "react-bootstrap";
import "../../css/modal/CreateModal.css"



const CreateModal = ({ show, setShow }) => {


    return (<>
        <Modal show={show} onHide={() => setShow(false)}>
            <div className="modal-body">
                <input className="modal-title" type="text" placeholder="제목" />
                <input className="modal-password" type="password" placeholder="비밀번호" />
                

            </div>

        </Modal>

    </>)
}

export default CreateModal;