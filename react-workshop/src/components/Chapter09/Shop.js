import { useState } from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);
    const onBuy = (title) => {
        setList(prev => {
            return [...prev, title];
        })
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={onBuy} />
            <ShopItem title="Dell X5500" onBuy={onBuy} />
            <ShopItem title="Asus NT6000" onBuy={onBuy} />
            <ul>
                {
                    list.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
