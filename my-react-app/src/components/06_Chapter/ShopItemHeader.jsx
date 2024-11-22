import React from 'react';

const ShopItemHeader = ({title, image}) => {
    return (
        <li>
            <h1>{title}</h1>
            <img src={image} />
        </li>
    );
};

export default ShopItemHeader;
