import React from 'react';

const ShopItemPricing = ({price}) => {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    );
};

export default ShopItemPricing;
