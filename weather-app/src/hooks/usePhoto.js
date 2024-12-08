import {PBApiKey, PBUrl} from "../consts/apiKeys.js";
import {useState} from "react";

export const usePhoto = (des) => {
    const [photo, setPhoto] = useState(false);
    const getPhoto = () => {
        fetch(`${PBUrl}?key=${PBApiKey}&q=${des}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => setPhoto(data))
            .catch(err => console.log(err));
    }

    return {
        photo,
        getPhoto
    };
}