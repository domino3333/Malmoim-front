
import axios from "axios";
import { ApiHost } from "../../ApiHost";


const prefix = "/api/qna"


// qna 방 생성 api
export const createQnARoom = async (input) => {

    const token = sessionStorage.getItem('accessToken')

    const result = await axios.post(`${ApiHost}${prefix}/create`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

}

// 하나의 qna 방을 가져오는 api
export const getMyOneQnaRoom = async (no) => {

    const token = sessionStorage.getItem('accessToken');

    const result = await axios.get(`${ApiHost}${prefix}/${no}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
}


// 타이머 시작 api
export const callStartTimer = async (roomNo, durationSeconds) => {

    const token = sessionStorage.getItem('accessToken');

    const result = await axios.post(`${ApiHost}${prefix}/${roomNo}/start-timer`, { durationSeconds }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
}

// 방 상태 업데이트 api
export const updateRoomStatus = async (roomNo, status) => {

    const token = sessionStorage.getItem('accessToken');

    const result = await axios.post(`${ApiHost}${prefix}/${roomNo}/update-status`, { status: status }, {
        headers: {
            Authorization: `Bearer ${token}`

        }
    })

}