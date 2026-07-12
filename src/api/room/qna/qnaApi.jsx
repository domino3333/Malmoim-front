
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
// 호스트 권한으로 소유한 Q&A 방 정보 조회.
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
// 참가자 화면에 필요한 Q&A 방 정보 조회.
export const getParticipantQnaRoom = async (no) => {


    const response = await axios.get(`${API_BASE_URL}${prefix}/${no}/participant`, null )

    return response.data;
}


// 타이머 시작 api
// 질문 시간 저장 및 질문 접수 단계 시작.
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
