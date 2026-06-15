import { useParams } from "react-router-dom";


const QnaHost = () => {


    const { no } = useParams();
    console.log("no",no);
    return (<>

        <h1>{no}</h1>
        <p>호스트의qna 방</p>
    </>)
}

export default QnaHost;