import MyNav from "../components/navbar/MyNav";
import MyFooter from "../components/footer/MyFooter";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FantasyBook from "../dataBooks/fantasy.json";
import SingleBook from "../components/singleCard/SingleBook";
import CommentArea from "../components/commentArea/CommentArea";

const DetailsPage = () => {
    
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
                        <SingleBook 
                        title={singleDetails.title}
                        img={singleDetails.img}
                        price={singleDetails.price}
                        category={singleDetails.category}
                        asin={singleDetails.asin}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <CommentArea asin={id}/>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </>
    )
}

export default DetailsPage;