import React from 'react';
import {Link} from "react-router-dom";
const Home = () => {
    const cities = ["Stare Babice", "Bydgoszcz", "Elbląg", "Paryż", "Montevideo", "Zaragoza", "Honolulu"];
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {
                    cities.map((el, i) => <li><Link to={`/cityweather/${el}`}>{el}</Link></li>)
                }
            </ul>

        </div>
    );
};

export default Home;
