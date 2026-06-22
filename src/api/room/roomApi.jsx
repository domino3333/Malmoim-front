import axios from "axios";
import { ApiHost } from "../ApiHost";



const prefix = "/api/room"



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


