import CommentArea from "../commentArea/CommentArea";
import "./singleBook.css"
import { useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigate } from "react-router-dom";

const SingleBook = ({ asin, title, img, price, category }) => {

    const [selected, setSelected] = useState(false);

    const selectedBooks = () => {
        setSelected(!selected)
    }

    const {isDarkMode} = useContext(ThemeContext)

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/book/" + asin)
    }

    return (
        <>
            <div className={selected ? "card-selected" : ""} data-testid="book-card">
                <div className={isDarkMode ? "card-container-dark my-3 text-white" : "card-container-light my-3"}>
                    <h2 className="card-title py-2 text-truncate">{title}</h2>
                    <img className="card-img" src={img} alt={title} />
                    <p>Price: {price}€</p>
                    <p>Category: {category}</p>
                    <div className="d-flex justify-content-between">
                        <button onClick={selectedBooks} className="btn btn-primary">Add Book</button>
                        <button onClick={navigateToDetails} className="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>
            {selected &&
                <CommentArea
                    asin={asin}
                />
            }
        </>
    )
}

export default SingleBook;