import React, {useEffect, useState} from 'react';

const HelloWorld = () => {
    const [text, setText] = useState("Hello, World!");

    useEffect(() => {
        const id = setTimeout(() => {
            setText("Hi, Everyone!")
            setText(prev => prev + "el" )
        }, 3000)

        return () => clearTimeout(id);
    }, [])

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default HelloWorld;
