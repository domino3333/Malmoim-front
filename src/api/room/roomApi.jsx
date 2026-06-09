import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/room"



export const createQnARoom = async (data) => {
    const result = await axios.post(`${ApiHost}${prefix}/create`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    //로그인 시 액세스토큰 저장
}


