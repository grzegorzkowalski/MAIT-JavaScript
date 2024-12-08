import React, {useEffect, useState} from 'react';
import ShowWeather from "./ShowWeather.jsx";
import {getPhoto, getWeather} from "../api/weather.js";
import {usePhoto} from "../hooks/usePhoto.js";

const FindWeather = () => {
    const [town, setTown] = useState('');
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    //const [photo, setPhoto] = useState('');

    const {photo, getPhoto} = usePhoto('');

    const submitHandler = (e) => {
        e.preventDefault();
        getWeather(setTemp, setDescription, town);
    };

    useEffect(() => {
        if (description) {
            getPhoto(description);
        }
    }, [description]);

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    value={town}
                    onChange={e => setTown(e.target.value)}
                />
                <button>Search</button>
            </form>
            {
                (temp && photo) &&
                <ShowWeather
                    temp={temp}
                    photo={photo}
                    description={description}
                    city={town}
                />
            }
        </>

    );
};

export default FindWeather;
