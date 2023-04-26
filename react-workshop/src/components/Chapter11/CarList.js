import { useState } from "react";

const CarList = () => {
    const [car, setCar] = useState("Fiat");

    const changeHandler = (e) => {
        setCar(e.target.value);
    }

    return (
        <div>
            <p>Wybrana marka: {car}</p>
            <span>Ilość liter w nazwie: {car.length}</span>
            <form>
                <select
                    value={car}
                    onChange={changeHandler}
                >
                    <option value="Dodge">Dodge</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>

        </div>
    );
};

export default CarList;
