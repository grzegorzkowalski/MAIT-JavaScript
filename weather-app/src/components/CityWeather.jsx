import React from 'react';
import {useParams} from "react-router-dom";

const CityWeather = () => {
    const {city} = useParams();
    console.log(city);
    return (
        <div>
            CityWeather - {city}
        </div>
    );
};

export default CityWeather;
