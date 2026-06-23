import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../css/host/modal/TimerModal.css"


const TimerModal = ({ show, onHide }) => {

    return (<>

        <Modal show={show} onHide={onHide}>

            <div className="timer-modal-body">
                <button
                    onClick={() => onHide()}
                    className="button-timer-modal-close"
                >
                    X
                </button>
                <h4>질문 시간 설정</h4>
                <p>참여자가 질문을 작성할 시간을 정해주세요.</p>
                <div className="timer-main-div">
                    <div className="minute-main-div">
                        <button>▲</button>
                        <input type="number" />
                        <button>▼</button>
                        <p>분</p>
                    </div>
                    <div className="colon-div">
                        :
                    </div>
                    <div className="second-main-div">
                        <button>▲</button>
                        <input type="number" />
                        <button>▼</button>
                        <p>초</p>
                    </div>
                </div>

                <div className="minute-preset-1">
                    1분
                </div>
                <div className="minute-preset-2">
                    3분
                </div>
                <div className="minute-preset-3">
                    5분
                </div>
                <div className="minute-preset-4">
                    10분
                </div>


                <div className="cancel-start-main-div">
                    <button>
                        취소
                    </button>
                    <button>
                        시작
                    </button>
                </div>

            </div>
        </Modal>
    </>)
}

export default TimerModal;