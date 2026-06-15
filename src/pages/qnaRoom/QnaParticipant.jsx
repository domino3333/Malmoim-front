import { useParams } from "react-router-dom";


const QnaParticipant = () => {


    const { no } = useParams();
    console.log("no",no);
    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>
    </>)
}

export default QnaParticipant;