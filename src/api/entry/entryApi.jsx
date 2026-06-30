import axios from "axios";
import { ApiHost } from "../ApiHost";


const prefix = "/api/entry"

export const checkRoomCode = async (code) => {

    const result = await axios.post(`${ApiHost}${prefix}/check-code`, {code},
        null
    );

    return result.data;

}