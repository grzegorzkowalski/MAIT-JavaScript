import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ShowWeather from "./ShowWeather.jsx";
import {getPhoto, getWeather} from "../api/weather.js";
import {usePhoto} from "../hooks/usePhoto.js";

const CityWeather = () => {
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    //const [photo, setPhoto] = useState('');

    const {photo, getPhoto} = usePhoto('');

    const {city} = useParams();

    useEffect(() => {
        getWeather(setTemp, setDescription, city);
    }, []);

    useEffect(() => {
        if (description) {
            getPhoto(description);
        }
    }, [description]);

    return (
        (temp && photo) && <ShowWeather
            temp={temp}
            photo={photo}
            description={description}
            city={city}
        />)
};

export default CityWeather;
