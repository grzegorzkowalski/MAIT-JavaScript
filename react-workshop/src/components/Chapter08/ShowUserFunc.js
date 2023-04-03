const ShowUserFunc = ({name, surname}) => {
    return (
        <>
            <button onClick={(e) => console.log({e, name, surname})}>
                Dane użytkownika
            </button>
        </>
    );
};

export default ShowUserFunc;
