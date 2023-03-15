const Sum = ({numbers}) => {
    return (
        <h1>
            {
                numbers.reduce((cur, next) => cur+next)
            }
        </h1>
    );
};

export default Sum;
