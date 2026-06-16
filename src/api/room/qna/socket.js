import { Client } from "@stomp/stompjs"


export const connectQnaSocket = (onConnect)=>{

    //STOMP client 객체 생성
    const client = new Client({
        brokerURL:"ws://localhost:8080/ws",
        reconnectDelay:5000,
        debug:()=>{},

    });

    // 연결 성공 시, 실행할 일 설정
    client.onConnect = ()=>{
        onConnect(client);
    };

    //연결 시작
    client.activate();
    return client;

}
