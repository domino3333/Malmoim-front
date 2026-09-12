import axios from "axios";
import { API_BASE_URL } from "../ApiHost";
import { getAccessToken } from "../../utils/auth/tokenStorage";



const prefix = "/api/room"



export const getMyRooms = async (currentPage,pageSize) => {

    const token = getAccessToken()

    const response = await axios.get(`${API_BASE_URL}${prefix}?page=${currentPage}&size=${pageSize}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    return response.data;
}


