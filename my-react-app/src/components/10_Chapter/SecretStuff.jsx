const SecretStuff = ({password, correctPassword, secret}) => {
    if (password === correctPassword) {
        return (
            <h2>
                {secret}
            </h2>
        );
    } else {
        return null;
    }
};

export default SecretStuff;
