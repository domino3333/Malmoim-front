import { Modal } from "react-bootstrap";
import "../../../css/host/modal/CreateModal.css"
import { useState } from "react";
import { createQnARoom } from "../../../api/room/qnaApi";



const CreateModal = ({ show, setShow, onHide ,title }) => {


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
        
        await createQnARoom({...input,
            isChecked:isChecked
        });

    }


    return (<>
        <Modal show={show} contentClassName="my-modal">
            <div className="modal-body">
                <button onClick={()=>{
                    onHide()
                    setIsChecked(false)
                }} className="button-modal-close">
                    X
                </button>
                <h4 className="h4-title">{title}</h4>
                <input className="modal-title" name="title" onChange={observeInput} type="text" placeholder="제목" />
                <input className="modal-capacity" name="capacity" onChange={observeInput} type="number" placeholder="정원" />

                <label htmlFor="checkBoxTitle">
                    비공개
                    <input className="privateCheckBox" type="checkbox" onChange={observeCheckBox} />
                </label>

                {isChecked ?
                    <input className="modal-password" name="password" onChange={observeInput} type="password" placeholder="비밀번호" />
                    : null}

                <button className="button-create" 
                    onClick={async ()=>{
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