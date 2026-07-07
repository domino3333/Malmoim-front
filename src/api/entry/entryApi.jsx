import axios from "axios";
import { ApiHost } from "../ApiHost";


const prefix = "/api/entry"

// 방 코드를 확인하는 api 호출
export const checkRoomCode = async (code) => {

    const result = await axios.post(`${ApiHost}${prefix}/check-code`, { code },
        null
    );

    return result.data;

}


// 비밀번호를 확인하는 api 호출
export const checkRoomPassword = async (roomNo, password) => {

    const result = await axios.post(`${ApiHost}${prefix}/check-password`, { roomNo, password },
        null
    )

    return result.data;


}

// 입장하기 클릭 시 닉네임을 보내는 함수
export const insertParticipant = async (roomNo, nickname) => {

    const result = await axios.post(`${ApiHost}${prefix}/insert-participant`, { roomNo, nickname },
        null
    )

    return result.data;
}


