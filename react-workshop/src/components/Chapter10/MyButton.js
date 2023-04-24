import { useState} from "react";

const MyButton = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
          <button onClick={() => setClicked(prev => !prev)}>
              {clicked ? "TAK" : "NIE" }
          </button>
        </>
    );
};

export default MyButton;
