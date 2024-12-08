import React from 'react';

const ShowWeather = ({photo, temp, description, city}) => {
    console.log(photo, temp, description, city);
    return (
        <div>
            {photo && <img src={photo?.hits[0]?.webformatURL} alt={photo?.hits[0]?.tags} />}
            <p>{city}</p>
            {temp && <p>Temperatura: {temp}</p>}
            {description && <p>Opis: {description}</p>}
        </div>
    );
};

export default ShowWeather;
