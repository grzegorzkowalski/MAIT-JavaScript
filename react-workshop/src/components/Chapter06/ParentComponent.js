const ParentComponent = (props) => {
    return (
        <div>
            <h1>To jest komponent rodzica</h1>
            {props.children}
        </div>
    );
};

export default ParentComponent;
