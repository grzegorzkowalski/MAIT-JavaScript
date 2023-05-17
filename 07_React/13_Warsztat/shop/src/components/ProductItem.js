import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductItem = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0657/7923/7091/products/WP08110_1_1200x1200_crop_center.webp?v=1664270222" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
