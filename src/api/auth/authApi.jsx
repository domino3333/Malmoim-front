import axios from "axios";
import { ApiHost } from "../ApiHost";

const prefix = "/api/auth"



const login = (data)=>{
    const result = axios.post(`${ApiHost}${prefix}`,data,null)
}
