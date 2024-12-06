import {useState} from 'react';

const MyButton = () => {
    const [text, setText] = useState(false);

    const clickHandler = () => {
        setText(prev => !prev);
    }

    return (
        <div>
            <button onClick={clickHandler}>{text ? "TAK" : "NIE"}</button>
        </div>
    );
};

export default MyButton;
