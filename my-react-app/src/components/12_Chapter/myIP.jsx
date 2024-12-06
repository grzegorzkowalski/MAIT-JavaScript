import React, {useEffect, useState} from 'react';

const MyIp = () => {
    const [ip, setIP] = useState(false);
    const [geo, setGeo] = useState(false);

    useEffect(() => {
        fetch("https://api.ipify.org/")
            .then(res => res.text())
            .then(res => setIP(res))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (ip) {
            fetch(`http://ip-api.com/json/${ip}`)
                .then(res => res.json())
                .then(res => setGeo(res));
        }

    }, [ip]);

    if (ip && geo) {
        return (
            <div>
                <h3>{ip}</h3>
                <h3>{geo.country}</h3>
                <h3>{geo.city}</h3>
            </div>
        );
    } else {
        return null;
    }

};

export default MyIp;
