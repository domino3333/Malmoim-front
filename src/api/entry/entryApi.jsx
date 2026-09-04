import axios from "axios";
import { API_BASE_URL } from "../ApiHost";


const prefix = "/api/entry"

// 방 코드를 확인하는 api 호출
export const checkRoomCode = async (code) => {

    const response = await axios.post(`${API_BASE_URL}${prefix}/check-code`, { code },
        null
    );

    return response.data;

}


// 비밀번호를 확인하는 api 호출
export const checkRoomPassword = async (roomNo, password) => {

    const response = await axios.post(`${API_BASE_URL}${prefix}/check-password`, { roomNo, password },
        null
    )

    return response.data;


}

// 입장하기 클릭 시 닉네임을 보내는 함수
// 참가자 정보 저장 및 방 입장 결과 반환
export const joinRoom = async (roomNo, nickname, password) => {

    const response = await axios.post(`${API_BASE_URL}${prefix}/insert-participant`, { roomNo, nickname, password },
        null
    )

    // 서버로부터 받는 참여자 토큰 저장
    sessionStorage.setItem(`malmoim:participant-session:${roomNo}`, response.data.participantToken);


    return response.data;
}


