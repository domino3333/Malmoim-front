import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../css/host/modal/TimerModal.css"


const TimerModal = ({ show, onHide }) => {



    const [minute, setMinute] = useState("05");
    const [second, setSecond] = useState("00");

    const [selectedPreset, setSelectedPreset] = useState(5);


    const observeMinute = (e) => {
        let value = e.target.value;

        value = value.replace(/\D/g, "");

        if (Number(value) > 60 || value.length > 2) {
            value = "60";
        }

        setMinute(value);
    }

    const observeSecond = (e) => {
        let value = e.target.value;

        value = value.replace(/\D/g, "");

        if (Number(value) > 60 || value.length > 2) {
            value = "59";
        }

        setSecond(value);
    }



    const presetTime = (minute)=>{
        setMinute(String(minute).padStart(2,"0"));
        setSecond(String("00"));
        setSelectedPreset(minute);
    }



    //화살표를 눌렀을 때 시간을 조정하는 함수
    const changeTime = (target, amount) => {

        if (target === "minute") {
            let value = Number(minute) + amount;

            if (value < 0) value = 0;
            if (value > 60) value = 60;

            setMinute(String(value).padStart(2, "0"));
        }

        if (target === "second") {
            let value = Number(second) + amount;

            if (value < 0) value = 0;
            if (value > 59) value = 59;

            setSecond(String(value).padStart(2, "0"));
        }
    }

    return (<>

        <Modal show={show} onHide={onHide}>

            <div className="timer-modal-body">
                
                <h4>질문 시간 설정</h4>
                <p>참여자가 질문을 작성할 시간을 정해주세요.</p>
                <div className="timer-main-div">
                    <div className="minute-main-div">
                        <button className="timer-arrow-top" onClick={() => changeTime("minute", 1)}>△</button>
                        <input value={minute} type="text" onChange={observeMinute} inputMode="numeric" className="minute-input" />
                        <button className="timer-arrow-bottom" onClick={() => changeTime("minute", -1)} >▽</button>
                        <p>분</p>
                    </div>
                    <div className="colon-div">
                        :
                    </div>
                    <div className="second-main-div">
                        <button className="timer-arrow-top" onClick={() => changeTime("second", 1)}>△</button>
                        <input value={second} type="text" onChange={observeSecond} inputMode="numeric" className="second-input" />
                        <button className="timer-arrow-bottom" onClick={() => changeTime("second", -1)}>▽</button>
                        <p>초</p>
                    </div>
                </div>

                <div className="minute-preset-parent-div">

                    <button className={selectedPreset===1 ? "minute-preset-active":"minute-preset"} onClick={()=>presetTime(1)}>
                        1분
                    </button>
                    <button className={selectedPreset===3 ? "minute-preset-active":"minute-preset"} onClick={()=>presetTime(3)}>
                        3분
                    </button>
                    <button className={selectedPreset===5 ? "minute-preset-active":"minute-preset"} onClick={()=>presetTime(5)}>
                        5분
                    </button>
                    <button className={selectedPreset===10 ? "minute-preset-active":"minute-preset"} onClick={()=>presetTime(10)}>
                        10분
                    </button>
                </div>


                <div className="cancel-start-main-div">
                    <div className="cancel-start-border-div">
                        <button onClick={() => onHide()} className="timer-modal-cancel-button">
                            취소
                        </button>
                        <button className="timer-modal-start-button">
                            시작
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    </>)
}

export default TimerModal;