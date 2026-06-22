
import axios from "axios";
import { ApiHost } from "../ApiHost";


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