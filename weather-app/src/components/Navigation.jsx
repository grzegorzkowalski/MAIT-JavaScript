import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            {/*<li><Link to="/cityweather">CityWeather</Link></li>*/}
            <li><Link to="/findweather">FindWeather</Link></li>
        </ul>
    );
};

export default Navigation;
