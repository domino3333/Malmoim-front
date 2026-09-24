import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
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

export const getRecentRooms = async () => {
    const token = getAccessToken();

    const response = await axios.get(`${API_BASE_URL}${prefix}/recent-rooms`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}



// myContent 페이지에서의 검색창 api 호출 메서드
export const searchRoom = async (keyword) => {

    const token = getAccessToken();

    const response = await axios.get(`${API_BASE_URL}${prefix}/search`, {

        params: { keyword },
        headers: {
            Authorization: `Bearer ${token}`

        }
    })

    return response.data;

}