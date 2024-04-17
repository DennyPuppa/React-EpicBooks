import "./singleBook.css"
import { useState } from "react";

const SingleBook = ({ asin, title, img, price, category }) => {

    const [selected, setSelected] = useState(false);

    const selectedBooks = () => {
        setSelected(!selected)
    }

    return (
        <div className={selected ? "card-selected" : ""}>
            <div className="card-container my-3">
                <h2 className="card-title py-2 text-truncate">{title}</h2>
                <img className="card-img" src={img} alt={title} />
                <p>Price: {price}€</p>
                <p>Category: {category}</p>
                <button onClick={selectedBooks} className="btn btn-primary">Add Book</button>
            </div>
        </div>
    )
}

export default SingleBook;