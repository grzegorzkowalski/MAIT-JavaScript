const ShopItem = ({title, onBuy}) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => onBuy(title)}>Kup</button>
        </div>
    );
};

export default ShopItem;
