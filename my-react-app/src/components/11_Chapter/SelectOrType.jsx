import React, {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, setCars] = useState([...items, "Inne"]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [newCar, setNewCar] = useState("");
    console.log(cars);

    const submitHandler = (e) => {
        e.preventDefault();
        const copyCars = [...cars];
        copyCars.pop();
        copyCars.push(newCar);
        setCars(copyCars);
    }

    return (
        <form onSubmit={submitHandler}>
            <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
            >
                {
                    cars.map((el, i) => <option key={i} value={el}>{el}</option>)
                }
            </select>
            {
                selectedCar === cars[cars.length-1]
                && <div>
                    <input
                        type="text"
                        value={newCar}
                        onChange={(e) => setNewCar(e.target.value)}
                    />
                    <button>Zapisz</button>
                </div>
            }
        </form>
    );
};

export default SelectOrType;
