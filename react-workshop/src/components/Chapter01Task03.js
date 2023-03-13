import artist from "../data/artist";

const Chapter01Task03 = () => {
    return (
        <ul>
            <li>Imię to: {artist.firstName}</li>
            <li>{artist.nickname}</li>
            <li>{artist.lastName}</li>
            <li>{artist.age}</li>
        </ul>
    );
};

export default Chapter01Task03;
