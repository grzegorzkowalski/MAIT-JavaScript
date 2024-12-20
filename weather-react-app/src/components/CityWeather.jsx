import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPhoto, getWeather} from "../api/weather.js";

const CityWeather = () => {
    const [temperature, setTemperature] = useState(false);
    const [description, setDesctiption] = useState(false);
    const [photo, setPhoto] = useState(false);
    const {city} = useParams();

    useEffect(() => {
        getWeather(setTemperature, setDesctiption, city);
    }, []);

    useEffect(() => {
        if (description) {
            getPhoto(description, setPhoto);
        }
    }, [description]);

    if (temperature && description) {
        return (
            <div>
                <h1>{city}</h1>
                <h2>{temperature} C</h2>
                <h3>{description}</h3>
                {photo && <img src={photo.hits[0].largeImageURL} />}
            </div>
            )
    } else {
        return (
            <div>
                <h1>CityWeather - {city}</h1>
            </div>
        );
    }
};

export default CityWeather;
