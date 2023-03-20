import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({item}) => {
    return (
        <section>
            <ShopItemHeader image={item.image} title={item.title} />
            <ShopItemDescription description={item.description} />
            <ShopItemPricing price={item.price} />
        </section>
    );
};

export default ShopItem;
