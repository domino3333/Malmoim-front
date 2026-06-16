import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


const QnaHost = () => {



    const { no } = useParams();
    console.log("no", no);


    
    return (<>

        <h1>{no}</h1>
        <p>호스트의qna 방</p>
        <button onClick={sendTest}>테스트버튼</button>
    </>)
}

export default QnaHost;
