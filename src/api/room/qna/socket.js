import { Client } from "@stomp/stompjs"

export const connectWebSocket = (onConnect) => {

    const client = new Client(
        {
            brokerURL: "ws://localhost:8080/ws",
            reconnectDelay: 5000,
            debug: (str) => console.log(str)

        }
    )

    client.onConnect = () => {
        onConnect(client);
    }

    client.activate();

    return client;


}
