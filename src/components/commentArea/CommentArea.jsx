import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { useState } from "react";

const CommentArea = ({asin}) => {

    const [comment, setComment] = useState({})
    const [render, setRender] = useState(false)

    const toggleRender = () => setRender(!render)

    return (
        <>
            <CommentList
                asin={asin}
                render={render}
            />
            <AddComment
                asin={asin}
                toggleRender={toggleRender}
            />
        </>
    )
}

export default CommentArea;