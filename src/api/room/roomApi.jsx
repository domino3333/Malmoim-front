import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/room"



export const createQnARoom = async (input) => {

    const token = sessionStorage.getItem('accessToken')
    console.log(token);

    const result = await axios.post(`${ApiHost}${prefix}/create`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    //로그인 시 액세스토큰 저장
}


