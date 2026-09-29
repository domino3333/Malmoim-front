import { Client } from "@stomp/stompjs"
import { WEBSOCKET_URL } from "../apiConfig"

// Q&A 실시간 통신용 STOMP 클라이언트 생성 및 연결
export const connectQnaSocket = (token, onConnect, onRoomFull) => {

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

    let roomFullHandled = false;
    client.onStompError = (frame) => {
        const errorMessage = `${frame.headers?.message ?? ""} ${frame.body ?? ""}`;
        if (!errorMessage.includes("ROOM_FULL") || roomFullHandled) return;

        roomFullHandled = true;
        client.reconnectDelay = 0;
        void client.deactivate();
        onRoomFull?.();
    }

    client.activate();

    return client;


}
