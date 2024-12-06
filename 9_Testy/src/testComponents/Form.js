import {useState} from "react";

const Form = () => {
    const [send, setSend] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setSend("Formularz wysłany");
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label>
                    Test
                    <input />
                </label>
                <button>Kup</button>
            </form>
            {send && <h1>{send}</h1>}
        </>
    );
};

export default Form;
