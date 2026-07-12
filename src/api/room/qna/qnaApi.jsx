
import axios from "axios";
import { API_BASE_URL } from "../../ApiHost";


const prefix = "/api/qna"


// qna 방 생성 api
export const createQnaRoom = async (input) => {

    const token = sessionStorage.getItem('accessToken')

    const response = await axios.post(`${API_BASE_URL}${prefix}/create`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

}

// 하나의 qna 방을 가져오는 api ( 호스트용, 토큰 O )
export const getHostQnaRoom = async (no) => {

    const token = sessionStorage.getItem('accessToken');

    const response = await axios.get(`${API_BASE_URL}${prefix}/${no}/host`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}

// 하나의 qna 방을 가져오는 api ( 참여자용 , 토큰 X )
export const getParticipantQnaRoom = async (no) => {


    const response = await axios.get(`${API_BASE_URL}${prefix}/${no}/participant`, null )

    return response.data;
}


// 타이머 시작 api
export const startQuestionPhase = async (roomNo, durationSeconds) => {

    const token = sessionStorage.getItem('accessToken');

    const response = await axios.post(`${API_BASE_URL}${prefix}/${roomNo}/start-timer`, { durationSeconds }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}

// 방 상태 업데이트 api
export const updateRoomStatus = async (roomNo, status) => {

    const token = sessionStorage.getItem('accessToken');

    const response = await axios.post(`${API_BASE_URL}${prefix}/${roomNo}/update-status`, { status: status }, {
        headers: {
            Authorization: `Bearer ${token}`

        }
    })

}
