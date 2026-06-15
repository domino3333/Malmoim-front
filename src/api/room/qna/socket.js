import { Client } from "@stomp/stompjs"


export const connectQnaSocket = (onMessage)=>{
    const client = new Client({
        brokerURL:"ws://localhost:8080/ws",
        reconnectDelay:5000,
        debug:()=>{},

    });

    client.onConnect = ()=>{
        onMessage(client);
    };

    client.activate();
    return client;

}