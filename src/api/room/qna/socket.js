import { Client } from "@stomp/stompjs"
import { WEBSOCKET_URL } from "../../ApiHost"

export const connectQnaSocket = (onConnect) => {

    const client = new Client(
        {
            brokerURL: `${WEBSOCKET_URL}`,
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
