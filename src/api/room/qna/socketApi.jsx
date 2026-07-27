import axios from "axios"


const wsPrefix = "/app/qna";

// 질문 등록(publish)
// 작성한 질문을 Q&A 서버 목적지로 발행.
export const publishQuestion = (client, data) => {

    // data가 곧 dto임
    client.publish({
        destination: `${wsPrefix}/register`,
        body: JSON.stringify(data)
    });

}
