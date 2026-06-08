import { Modal } from "react-bootstrap";
import "../../css/modal/CreateModal.css"
import { useState } from "react";



const CreateModal = ({ show, setShow, title }) => {


    const [isChecked, setIsChecked] = useState(false);

    const observeCheckBox = (e) => {
        setIsChecked(e.target.checked);
    }


    return (<>
        <Modal show={show} onHide={() => setShow(false)}>
            <div className="modal-body">
                <h4>{title}</h4>
                <input className="modal-title" type="text" placeholder="제목" />
                <input className="modal-capacity" type="number" placeholder="정원" />

                <label htmlFor="checkBoxTitle">
                    비공개
                    <input className="checkBoxTitle" type="checkbox" onChange={observeCheckBox} />
                </label>

                {isChecked ?
                    <input className="modal-password" type="password" placeholder="비밀번호" />
                    : null}

                <button>
                    만들기
                </button>
            </div>

        </Modal>

    </>)
}

export default CreateModal;