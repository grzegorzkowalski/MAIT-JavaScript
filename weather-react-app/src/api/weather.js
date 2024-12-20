import {OWApiKey, PBApiKey, OWUrl, PBUrl} from "../consts/apiKeys.js";

export const getPhoto = (des, setPhoto) => {
    fetch(`${PBUrl}?key=${PBApiKey}&q=${des}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => setPhoto(data))
        .catch(err => console.log(err));
}

export const getWeather = (setTemp, setDescription, city) => {
    fetch(`${OWUrl}?q=${city}&appid=${OWApiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            setTemp(data.main.temp);
            setDescription(data.weather[0].description);
        } )
        .catch(err => console.log(err));
}