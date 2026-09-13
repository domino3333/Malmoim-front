import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../../css/host/qna/modal/TimerModal.css"


const TimerModal = ({ title, description, show, onHide, onStart }) => {



    const [minute, setMinute] = useState("05");
    const [second, setSecond] = useState("00");

    const [selectedPreset, setSelectedPreset] = useState(5);
    const [isStarting, setIsStarting] = useState(false);


    // 시작 버튼 누르면 호출되는 함수
    // 입력한 분과 초를 전체 초로 변환 후 질문 타이머 시작
    const handleStart = async () => {
        if (isStarting) return;
        const minuteNumber = Number(minute);
        const secondNumber = Number(second);

        const totalSeconds = minuteNumber * 60 + secondNumber;
        setIsStarting(true);
        try {
            await onStart(totalSeconds);
            onHide();
        } catch (e) {
            const message = e.response?.data;
            alert(e.response?.status < 500 && typeof message === "string" && message.trim()
                ? message : "시작 결과를 확인하지 못했습니다. 방 상태를 확인한 뒤 다시 시도해주세요.");
        } finally {
            setIsStarting(false);
        }

    }

    // 분 입력값의 숫자 필터링 및 허용 범위 보정
    const handleMinuteChange = (e) => {
        let value = e.target.value;

        value = value.replace(/\D/g, "");

        if (Number(value) > 60 || value.length > 2) {
            value = "60";
        }

        setMinute(value);
        //시간을 직접 바꿀 땐 프리셋 풀리도록 null 넣어주기
        setSelectedPreset(null);
    }

    // 초 입력값의 숫자 필터링 및 허용 범위 보정
    const handleSecondChange = (e) => {
        let value = e.target.value;

        value = value.replace(/\D/g, "");

        if (Number(value) > 60 || value.length > 2) {
            value = "59";
        }

        setSecond(value);
        //시간을 직접 바꿀 땐 프리셋 풀리도록 null 넣어주기
        setSelectedPreset(null);
    }



    // 선택한 프리셋 기준 분과 초 설정
    const applyTimePreset = (minute) => {
        setMinute(String(minute).padStart(2, "0"));
        setSecond(String("00"));
        setSelectedPreset(minute);
    }



    //화살표를 눌렀을 때 시간을 조정하는 함수
    // 대상과 증감량 기준 분 또는 초 조정
    const adjustTime = (target, amount) => {
        //시간을 직접 바꿀 땐 프리셋 풀리도록 null 넣어주기
        setSelectedPreset(null);

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

        <Modal show={show} onHide={isStarting ? undefined : onHide}
            backdrop={isStarting ? "static" : true} keyboard={!isStarting}>

            <div className="timer-modal-body">

                <h4>{title}</h4>
                <p>{description}</p>
                <div className="timer-main-div">
                    <div className="minute-main-div">
                        <button disabled={isStarting} className="timer-arrow-top" onClick={() => adjustTime("minute", 1)}>△</button>
                        <input disabled={isStarting} value={minute} type="text" onChange={handleMinuteChange} inputMode="numeric" className="minute-input" />
                        <button disabled={isStarting} className="timer-arrow-bottom" onClick={() => adjustTime("minute", -1)} >▽</button>
                        <p>분</p>
                    </div>
                    <div className="colon-div">
                        :
                    </div>
                    <div className="second-main-div">
                        <button disabled={isStarting} className="timer-arrow-top" onClick={() => adjustTime("second", 1)}>△</button>
                        <input disabled={isStarting} value={second} type="text" onChange={handleSecondChange} inputMode="numeric" className="second-input" />
                        <button disabled={isStarting} className="timer-arrow-bottom" onClick={() => adjustTime("second", -1)}>▽</button>
                        <p>초</p>
                    </div>
                </div>

                <div className="minute-preset-parent-div">

                    <button disabled={isStarting} className={selectedPreset === 1 ? "minute-preset-active" : "minute-preset"} onClick={() => applyTimePreset(1)}>
                        1분
                    </button>
                    <button disabled={isStarting} className={selectedPreset === 3 ? "minute-preset-active" : "minute-preset"} onClick={() => applyTimePreset(3)}>
                        3분
                    </button>
                    <button disabled={isStarting} className={selectedPreset === 5 ? "minute-preset-active" : "minute-preset"} onClick={() => applyTimePreset(5)}>
                        5분
                    </button>
                    <button disabled={isStarting} className={selectedPreset === 10 ? "minute-preset-active" : "minute-preset"} onClick={() => applyTimePreset(10)}>
                        10분
                    </button>
                </div>


                <div className="cancel-start-main-div">
                    <div className="cancel-start-border-div">
                        <button disabled={isStarting} onClick={() => onHide()} className="timer-modal-cancel-button">
                            취소
                        </button>
                        <button disabled={isStarting} className="timer-modal-start-button" onClick={handleStart}>
                            {isStarting ? "시작 중..." : "시작"}
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    </>)
}

export default TimerModal;
