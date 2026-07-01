import { Modal } from "react-bootstrap";
import "../../../css/host/modal/CreateModal.css"
import { useState } from "react";
import { createQnARoom } from "../../../api/room/qna/qnaApi";



const CreateModal = ({ show, onHide, title }) => {


    const [isChecked, setIsChecked] = useState(false);

    const observeCheckBox = (e) => {
        setIsChecked(e.target.checked);
    }

    const [input, setInput] = useState({
        title: "",
        capacity: "",
        password: null,
        isChecked: isChecked
    })

    const observeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const createRoom = async () => {

        await createQnARoom({
            ...input,
            isChecked: isChecked
        });

    }


    return (<>
        <Modal show={show} contentClassName="create-modal">
            <div className="create-modal-body">
                <button onClick={() => {
                    onHide()
                    setIsChecked(false)
                }} className="create-modal-x-button">
                    X
                </button>
                <h4 className="create-modal-title-h4">{title}</h4>
                <input className="create-modal-title-input" name="title" onChange={observeInput} type="text" placeholder="제목" />
                <input className="create-modal-capacity-input" name="capacity" onChange={observeInput} type="number" placeholder="정원" />

                <label htmlFor="checkBoxTitle">
                    비공개
                    <input className="create-modal-private-checkbox" type="checkbox" onChange={observeCheckBox} />
                </label>

                {isChecked ?
                    <input className="create-modal-password-input" name="password" onChange={observeInput} type="password" placeholder="비밀번호" />
                    : null}

                <button className="create-modal-create-button"
                    onClick={async () => {
                        await createRoom()
                        onHide()
                        setIsChecked(false)
                    }}>
                    만들기
                </button>
            </div>
        </Modal>

    </>)
}

export default CreateModal;
