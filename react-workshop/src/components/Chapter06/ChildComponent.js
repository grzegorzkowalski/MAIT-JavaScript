const ChildComponent = (props) => {
    return (
        <div>
            <h2>Komponent dziecka</h2>
            {props.children}
        </div>
    );
};

export default ChildComponent;
