import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Button } from 'react-bootstrap';

const AddComment = ({asin, render, toggleRender}) => {

    const URL_POST = "https://striveschool-api.herokuapp.com/api/comments"

    const [formData, setFormData] = useState({})

    console.log(formData);

    const handleFormData = (e) => {
        const {name, value} = e.target
        const parsedValue = name === "rate" ? Number(value) : value
        setFormData({
            ...formData,
            [name] : parsedValue,
            elementId: asin
        })
    }

    const addCommentBook = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(URL_POST, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAyZGJmNWU2MDQ3YjAwMTlmYTVmZjUiLCJpYXQiOjE3MTM1NDY2MDEsImV4cCI6MTcxNDc1NjIwMX0.KKbC2-4tP4lEZa1ta4eaZSKJV_FKI7HcDcSI_C3D6-A"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data);
            if (response.ok) {
                toggleRender()
            }
            return data
        } catch (error) {
            if (error) {
                 
            }
        }
    }

    return (
        <Form onSubmit={addCommentBook}>
            <Form.Select name="rate" aria-label="Ratings selection" onChange={handleFormData}>
                <option>Insert Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Form.Group className="mb-3" placeholder="Insert your comment">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="comment" onChange={handleFormData} as="textarea" rows={3} />
            </Form.Group>
            <Button type='submit'>Add comment</Button>
        </Form>
    )
}

export default AddComment;