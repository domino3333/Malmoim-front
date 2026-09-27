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



// 내 방 목록 페이지의 검색 API 호출 함수
export const searchRooms = async (keyword,currentPage,pageSize) => {

    const token = getAccessToken();

    const response = await axios.get(`${API_BASE_URL}${prefix}/search`, {
        params: { keyword, page: currentPage, size: pageSize },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;

}
