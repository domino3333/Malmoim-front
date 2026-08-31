import axios from "axios";
import { API_BASE_URL } from "../ApiHost";

const prefix = "/api/participant/qna";

// 하나의 qna 방을 가져오는 api ( 참여자용 , 토큰 X )
// 참가자 화면에 필요한 Q&A 방 정보 조회
export const getParticipantQnaRoom = async (roomNo) => {


    const response = await axios.get(`${API_BASE_URL}${prefix}/${roomNo}/participant`, null)

    return response.data;
}

// 참여자의 정보를 받아오는 api
export const getParticipantInfo = async (roomNo) => {

    const token = sessionStorage.getItem(`malmoim:participant-session:${roomNo}`);

    const response = await axios.get(`${API_BASE_URL}${prefix}/participant-info`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}


// 참여자 리스트를 받아오는 api
export const getParticipantList = async (roomNo) =>{

    const token = sessionStorage.getItem(`malmoim:participant-session:${roomNo}`);

    const response = await axios.get(`${API_BASE_URL}${prefix}/participant-list`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}

// 질문 리스트를 받아오는 api
export const getQuestionList = async (roomNo) =>{

    const token = sessionStorage.getItem(`malmoim:participant-session:${roomNo}`);

    const response = await axios.get(`${API_BASE_URL}${prefix}/question-list`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}

// 질문 리스트를 받아오는 api
export const castVote = async (questionNo,roomNo) =>{

    const token = sessionStorage.getItem(`malmoim:participant-session:${roomNo}`);

    const response = await axios.post(`${API_BASE_URL}${prefix}/${questionNo}/vote-question`,null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}
