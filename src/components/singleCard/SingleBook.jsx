import "./singleBook.css"

const SingleBook = ({asin, title, img, price, category}) => {

    // const [selected, setSelected] = useState(false)

    // const selectedBooks = () => {

    // }

    return(
        <div className = "card-container my-3">
            <h2 className="card-title py-2 text-truncate">{title}</h2>
            <img className="card-img" src={img} alt={title}/>
            <p>Price: {price}€</p>
            <p>Category: {category}</p>
            <button className="btn btn-primary">Add Book</button>
        </div>
    )
}

export default SingleBook;