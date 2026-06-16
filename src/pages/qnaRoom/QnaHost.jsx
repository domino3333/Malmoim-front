import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { connectQnaSocket } from "../../api/room/qna/socket";


const QnaHost = () => {


    //client가 바뀐다고 화면을 다시 그릴 필요가 없기 때문에
    // useRef 사용
    const clientRef = useRef(null);

    useEffect(() => {

        const client = connectQnaSocket((connectedClient) => {
            clientRef.current = connectedClient;
        });


        return () => client.deactivate();
    }, [])



    const sendTest = () => {
        const client = clientRef.current;
        if (!client || !client.connected) return;

        client.publish({
            destination: "/app/qna/test",
            body: JSON.stringify({
                roomNo: Number(no),
                message: "호스트 테스트 메시지11",
            }),
        });
    };

    const { no } = useParams();
    console.log("no", no);


    
    return (<>

        <h1>{no}</h1>
        <p>호스트의qna 방</p>
        <button onClick={sendTest}>테스트버튼</button>
    </>)
}

export default QnaHost;
