import {Col, Row} from "react-bootstrap";
import ProductItem from "../components/ProductItem";

const Home = () => {
    return (
        <>
            <Row>
                <Col>1 of 2 Strona główna</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
            </Row>
        </>

    );
};

export default Home;
