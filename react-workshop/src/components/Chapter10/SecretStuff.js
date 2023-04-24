const SecretStuff = ({password, correctPassword,secret}) => {

    if (password === correctPassword) {
        return (
            <div>
                {secret}
            </div>
        );
    }
    else {
        return null;
    }
};

export default SecretStuff;
