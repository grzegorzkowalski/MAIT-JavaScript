const ButtonToClick = ({updateCounter}) => {
    const clickHandler = () => {
        if (typeof updateCounter === "function") {
            updateCounter();
        }
    }

    return (
        <button onClick={clickHandler}>CounterUpdater</button>
    );
};

export default ButtonToClick;
