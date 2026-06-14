import { useParams } from "react-router-dom";


const QnaMain = () => {


    const { no } = useParams();
    console.log("no",no);
    return (<>

        <h1>{no}</h1>
        <p>몬데</p>
    </>)
}

export default QnaMain;