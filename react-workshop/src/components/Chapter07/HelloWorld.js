import {useEffect, useState} from "react";

const HelloWorld = () => {
    const [hello, setHello] = useState("Hello, World!");

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setHello("Hi, Everyone!");
        }, 5000);
    }, []);

    return (
        <h1>
            {
                hello
            }
        </h1>
    );
};

export default HelloWorld;
