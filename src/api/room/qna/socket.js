import { Client } from "@stomp/stompjs"
import { WebSocketHost } from "../../ApiHost"

export const connectWebSocket = (onConnect) => {

    const client = new Client(
        {
            brokerURL: `${WebSocketHost}`,
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
