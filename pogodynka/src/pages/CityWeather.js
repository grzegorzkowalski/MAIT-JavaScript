import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const CityWeather = () => {
    const { city } = useParams();
    const API_key = "5b2965ceb7056ac1cb87a3f4581e90b4";
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState("");


    useEffect(() => {
        console.log(city);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            .then(re => setWeather(re));
    }, []);

    useEffect(() => {
        if(weather) {
            fetch(`https://pixabay.com/api/?key=6799546-801a9e48e0e142c05114f0377&q=${city}+${weather.weather[0].main}&image_type=photo`)
                .then(res => res.json())
                .then(re => setImage(re.hits[0].largeImageURL));
        }
    }, [weather])

    return (
        <>
            <h1>CityWeather dla {city} </h1>
            {
                weather && <ul>
                    <li>Temperatura: {weather.main.temp}</li>
                    <li>Pogoda ogólna: {weather.weather[0].main}</li>
                    <li>Ciśnienie: {weather.main.pressure}</li>
                </ul>
            }
            {image && <img src={image} />}
        </>
    );
};

export default CityWeather;
