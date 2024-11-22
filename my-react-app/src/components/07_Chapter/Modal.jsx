import React, {useEffect, useState} from 'react';

const Modal = ({heading}) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setDisplay(true);
        }, [10000])

        return () => clearTimeout(id);
    }, []);

    if (display) {
        return (
            <div>
                <h2>{heading}</h2>
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;
