import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    const cities = ["Warszawa", "Londyn", "Tokio", "Pekin", "Ankara"];
    return (
        <ul>
            {
                cities.map(el => <li key={el}><Link to={`/cityweather/${el}`}>{el}</Link></li>)
            }
        </ul>
    );
};

export default Home;
