import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [city, setCity] = useState("Warsaw");
    const cities = ["Warsaw", "London", "Paris", "Bangkok", "Tokyo", "Chicago"];
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate(`/cityweather/${city}`);
        }}>
            <h1>Strona główna</h1>
            <select
                value={city}
                onChange={(e => setCity(e.target.value))}
            >
                {
                    cities.map(el => {
                        return <option key={el} value={el}>{el}</option>
                    })
                }
            </select>
            <button>Sprawdź pogodę dla {city}</button>
        </form>
    );
};

export default Home;
