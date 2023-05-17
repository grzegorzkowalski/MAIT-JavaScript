import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductItem = ({data, addToBasket}) => {
    console.log(data);
    const clickHandler = (e) => {
        e.preventDefault();
        if (typeof addToBasket === "function") {
            addToBasket(prev => [...prev, data]);
        }
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.thumb} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    Cena: {data.price} zł
                </Card.Text>
                <Button variant="primary" onClick={clickHandler}>Dodaj do koszyka</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
