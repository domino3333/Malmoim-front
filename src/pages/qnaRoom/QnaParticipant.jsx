import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connectQnaSocket } from "../../api/room/qna/socket";

const QnaParticipant = () => {


    const { no } = useParams();



    return (<>

        <h1>{no}</h1>
        <p>참여자의qna 방</p>
        <h3>{msg}</h3>
    </>)
}

export default QnaParticipant;
