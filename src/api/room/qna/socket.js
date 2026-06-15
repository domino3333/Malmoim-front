import { Client } from "@stomp/stompjs"
import SockJS from "sockjs-client"


export const connectQnaSocket = (onMessage)=>{
    const client = new Client({
        webSocketFactory:()=> new SockJS("http://localhost:8080/ws"),
        reconnectDelay:5000,
        debug:()=>{},

    });

    client.onConnect = ()=>{
        onMessage(client);
    };

    client.activate();
    return client;

}