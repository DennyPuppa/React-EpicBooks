import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BeatLoader } from 'react-spinners';

const CommentList = ({ asin, render, toggleRender }) => {

    const URL_ENDPOINT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    const [bookComments, setBookComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    const getBookComments = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(URL_ENDPOINT, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAyZGJmNWU2MDQ3YjAwMTlmYTVmZjUiLCJpYXQiOjE3MTM1NDY2MDEsImV4cCI6MTcxNDc1NjIwMX0.KKbC2-4tP4lEZa1ta4eaZSKJV_FKI7HcDcSI_C3D6-A"
                }
            })
            const data = await response.json()
            setIsLoading(false)
            setBookComments(data)
            return data
        } catch (error) {
            if (error) {
                setError("ops...si è verificato un errore")  
            }            
        }
    }

    useEffect(() => {
        getBookComments()
    }, [render])

    if (!isLoading && bookComments && bookComments.length === 0) {
        return(<div>Non ci sono commenti per questo libro</div>)
    }

    return (
        <>
            {isLoading && !error &&(
                <BeatLoader color="#36d7b7" />
            )}
            {!isLoading && !error && bookComments &&(
                <ListGroup>
                    {bookComments.map((comment, index) => (
                        <ListGroup.Item key={`comment-${index}`}>{comment.comment}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            {error &&(
                <div>{error}</div>
            )}
        </>

    )
}

export default CommentList;