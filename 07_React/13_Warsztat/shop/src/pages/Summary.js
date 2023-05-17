import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

const Summary = () => {
    const params = useParams();
    return (
        <>
            <h1>
                Summary:
            </h1>
            <p>Lączna wartość zamówienia: {params.price} zł</p>
            <Button>Przejdź do płatności</Button>
        </>
);
};

export default Summary;
