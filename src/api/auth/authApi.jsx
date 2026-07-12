import axios from "axios";
import { API_BASE_URL } from "../ApiHost";

const prefix = "/api/auth"



export const login = async (data)=>{
    const response = await axios.post(`${API_BASE_URL}${prefix}/login`,data,null);

    //로그인 시 액세스토큰 저장
    sessionStorage.setItem('accessToken',response.data.accessToken);
}


export const signUp = async (data)=>{
    const response = await axios.post(`${API_BASE_URL}${prefix}/signUp`,data,null);
    
}
