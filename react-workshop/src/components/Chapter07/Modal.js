import {useState, useEffect} from "react";

const Modal = ({heading}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShow(prev => !prev);
        }, 10000);
    }, []);

    return (
        <>
            { show && <h1>{heading}</h1> }
        </>
    );
};

export default Modal;
