import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connectQnaSocket } from "../../api/room/qna/socket";


const QnaHost = () => {



    useEffect(() => {

        const client = connectQnaSocket(() => { });
        return () => client.deactivate();
    }, [])



    const sendTest = ()=>{
        const client = window.qnaClient;
        if(!client) return;

        client.publish({
            destination: "/app/qna/test",
            body:JSON.stringify({
                roomNo: Number(no),
                message:"호스트 테스트 메시지11",
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