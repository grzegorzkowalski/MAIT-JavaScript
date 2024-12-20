import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/" >Strona główna</Link></li>
            <li><Link to="/cityweather" >Pogoda w mieście</Link></li>
            <li><Link to="/findweather" >Znajdź pogodę</Link></li>
        </ul>
    );
};

export default Navigation;
