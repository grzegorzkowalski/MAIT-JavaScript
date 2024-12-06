import React, {useState} from 'react';

const Hello = () => {
    const [name, setName] = useState("Ty");

    const clickHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <form >
            <input
                type="text"
                value={name}
                onChange={clickHandler}
            />
            <h1>{name}</h1>
        </form>
    );
};

export default Hello;
