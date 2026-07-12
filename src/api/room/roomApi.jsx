import axios from "axios";
import { API_BASE_URL } from "../ApiHost";



const prefix = "/api/room"



export const getMyRooms = async (currentPage,pageSize) => {

    const token = sessionStorage.getItem('accessToken')

    const response = await axios.get(`${API_BASE_URL}${prefix}?page=${currentPage}&size=${pageSize}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    return response.data;
}


