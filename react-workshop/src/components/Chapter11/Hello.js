import { useState } from "react";

const Hello = () => {
    const [text, setText] = useState("Ty");
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h1>{text}</h1>
        </form>
    );
};

export default Hello;
