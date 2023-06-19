import {useParams} from "react-router-dom";

const SingleBoardPage = () => {
    const {boardId} = useParams<{boardId: string}>();

    console.log(boardId);

    return (
        <>
            Single board
        </>
    )
}

export default SingleBoardPage;