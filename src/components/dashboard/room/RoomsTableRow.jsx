

const RoomsTableRow = ({room})=>{

    return(<>

        <p>타이틀:{room.title}</p>
        <p>타이틀:{room.createdAt}</p>
        <p>타이틀:{room.code}</p>
    </>)
}

export default RoomsTableRow;