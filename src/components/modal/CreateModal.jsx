import { Modal } from "react-bootstrap";
import "../../css/modal/CreateModal.css"
import { useState } from "react";
import { createQnARoom } from "../../api/room/roomApi";



const CreateModal = ({ show, setShow, title }) => {


    const [isChecked, setIsChecked] = useState(false);

    const observeCheckBox = (e) => {
        setIsChecked(e.target.checked);
    }

    const [input,setInput] = useState({
        title:"",
        capacity:"",
        password:"",
        isChecked:isChecked
    })

    const observeInput = (e)=>{
        setInput({...input,
            [e.target.name]:e.target.value
        })
    }

    const createRoom = async ()=>{
        
        await createQnARoom(input);

    }


    return (<>
        <Modal show={show} onHide={() => setShow(false)} contentClassName="my-modal">
            <div className="modal-body">
                <h4 className="h4-title">{title}</h4>
                <input className="modal-title" onChange={observeInput} type="text" placeholder="제목" />
                <input className="modal-capacity" onChange={observeInput} type="number" placeholder="정원" />

                <label htmlFor="checkBoxTitle">
                    비공개
                    <input className="privateCheckBox" type="checkbox" onChange={observeCheckBox} />
                </label>

                {isChecked ?
                    <input className="modal-password" onChange={observeInput} type="password" placeholder="비밀번호" />
                    : null}

                <button className="button-create" onClick={createRoom}>
                    만들기
                </button>
            </div>
        </Modal>

    </>)
}

export default CreateModal;