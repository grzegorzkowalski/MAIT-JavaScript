import {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prevState => {
                if (prevState === "green") {
                    return "red";
                }
                else {
                    return "green"
                }
            });
        }, 2000);

        return () => clearInterval(intervalID);
    }, [])

    return (
        <div style={{
            width: "200px",
            height: "200px",
            background: color
        }} />
    );
};

export default Box;
