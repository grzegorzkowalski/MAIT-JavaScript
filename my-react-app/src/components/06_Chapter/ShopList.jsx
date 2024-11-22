import React from 'react';
import items from "../../data/items.js";
import ShopItemHeader from "./ShopItemHeader";

const ShopList = () => {
    return (
        <ul>
            {
                items.map(el => <ShopItemHeader title={el.title} image={el.image} key={el.title} />)
            }

        </ul>
    );
};

export default ShopList;
