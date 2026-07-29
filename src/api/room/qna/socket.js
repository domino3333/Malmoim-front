import { Client } from "@stomp/stompjs"
import { WEBSOCKET_URL } from "../../ApiHost"

// Q&A 실시간 통신용 STOMP 클라이언트 생성 및 연결
export const connectQnaSocket = (token, onConnect) => {

    const client = new Client(
        {
            brokerURL: `${WEBSOCKET_URL}`,
            reconnectDelay: 5000,
            connectHeaders:{
                Authorization: `Bearer ${token}`
            },
            debug: (str) => console.log(str)

        }
    )

    client.onConnect = () => {
        onConnect(client);
    }

    client.activate();

    return client;


}
