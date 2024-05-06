import MyNav from "../components/navbar/MyNav";
import MyFooter from "../components/footer/MyFooter";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FantasyBook from "../dataBooks/fantasy.json";
import CommentArea from "../components/commentArea/CommentArea";

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const DetailsPage = () => {

    const {isDarkMode} = useContext(ThemeContext)
    
    const id = useParams();

    const singleDetails = FantasyBook.find((book) => book.asin === id.asin)
    console.log(singleDetails);
    console.log(singleDetails.title);

    return (
        <>
            <MyNav />
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div>
                            <div className={isDarkMode ? "card-container-dark my-3 text-white" : "card-container-light my-3"}>
                                <img className="card-img" src={singleDetails.img} alt={singleDetails.title} />
                                <h2 className="card-title py-2">{singleDetails.title}</h2>
                                <p>Price: {singleDetails.price}€</p>
                                <p>Category: {singleDetails.category}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <CommentArea asin={id.asin}/>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </>
    )
}

export default DetailsPage;