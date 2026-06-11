import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/room"



export const createQnARoom = async (input) => {

    const token = sessionStorage.getItem('accessToken')

    const result = await axios.post(`${ApiHost}${prefix}/create`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

}


export const getMyRooms = async (currentPage,pageSize) => {

    const token = sessionStorage.getItem('accessToken')

    const result = await axios.get(`${ApiHost}${prefix}?page=${currentPage}&size=${pageSize}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    return result.data;
}


