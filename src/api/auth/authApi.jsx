import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/auth"



export const login = ({data})=>{
    const result = axios.post(`${ApiHost}${prefix}/login`,data,null)
}


export const signUp = ({data})=>{
    const result = axios.post(`${ApiHost}${prefix}/signUp`,data,null)
}
