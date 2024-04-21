import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import FantasyBook from "../../dataBooks/fantasy.json"
import SingleBook from "../singleCard/SingleBook"


const AllTheBooks = (props) => {

    return (
        <Container>
            <Row>
                {props.allBooks.map((book, index) => (
                    <Col key={`singlebook-${index}`} xs={12} md={4} lg={3}>
                        <SingleBook
                            title={book.title}
                            img={book.img}
                            price={book.price}
                            category={book.category}
                            asin={book.asin}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks;