import axios from "axios"


const wsPrefix = "/app/qna";

//질문 등록(publish)
export const publishQuestion = (client, data) => {

    client.publish({
        destination: `${wsPrefix}/register`,
        body: JSON.stringify(data)
    });

}
