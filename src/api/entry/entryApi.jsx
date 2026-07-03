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

export const checkRoomPassword = async (password) => {

    const result = await axios.post(`${ApiHost}${prefix}/check-password`, { password },
        null
    )

    return result.data;


}