import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/auth"



export const login = async (data)=>{
    const result = await axios.post(`${ApiHost}${prefix}/login`,data,null);

    //로그인 시 액세스토큰 저장
    sessionStorage.setItem('accessToken',result.data.accessToken);
}


export const signUp = async (data)=>{
    const result = await axios.post(`${ApiHost}${prefix}/signUp`,data,null);
    
}
