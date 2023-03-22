import ShopItemHeader from "./ShopItemHeader";

const ShopList = ({list}) => {
    return (
        <>
            {
                list.map(el => {
                    return <ShopItemHeader
                        key={el.title}
                        title={el.title}
                        image={el.image}
                    />
                })
            }
        </>
    );
};

export default ShopList;
