import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/CreateQnaRoomModal.css"
import { useState } from "react";
import { createQnaRoom } from "../../../../api/qna/hostQnaApi";



// Q&A 방 생성에 필요한 값을 입력받는 모달 컴포넌트
const CreateQnaRoomModal = ({ show, onHide, title }) => {


    const [isPrivate, setIsPrivate] = useState(false);

    // 비공개 체크 여부의 상태 반영
    const handlePrivateChange = (e) => {
        setIsPrivate(e.target.checked);
    }

    const [input, setInput] = useState({
        title: "",
        capacity: "",
        password: null,
        isPrivate: isPrivate
    })

    // name 속성 기준 방 생성 입력값의 상태 반영
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // 입력한 방 정보 기반 Q&A 방 생성 요청
    const handleCreateRoom = async () => {

        if (!input.title.trim()) {
            window.alert('제목을 입력해주세요');
            return;
        }

        if (!input.capacity.trim()) {
            window.alert('정원을 입력해주세요');
            return;
        }

        await createQnaRoom({
            ...input,
            isPrivate: isPrivate
        });
        onHide();
        setIsPrivate(false)
    }


    return (<>
        <Modal show={show} contentClassName="create-modal">
            <div className="create-modal-body">
                <button onClick={() => {
                    onHide()
                    setIsPrivate(false)
                }} className="create-modal-x-button">
                    X
                </button>
                <h4 className="create-modal-title-h4">{title}</h4>
                <input className="create-modal-title-input" name="title" onChange={handleInputChange} type="text" placeholder="제목" />
                <input className="create-modal-capacity-input" name="capacity" onChange={handleInputChange} type="number" placeholder="정원" />

                <label htmlFor="checkBoxTitle">
                    비공개
                    <input className="create-modal-private-checkbox" type="checkbox" onChange={handlePrivateChange} />
                </label>

                {isPrivate ?
                    <input className="create-modal-password-input" name="password" onChange={handleInputChange} type="password" placeholder="비밀번호" />
                    : null}

                <button className="create-modal-create-button"
                    onClick={handleCreateRoom}>
                    만들기
                </button>
            </div>
        </Modal>

    </>)
}

export default CreateQnaRoomModal;
