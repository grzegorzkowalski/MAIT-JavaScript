import artist from "../data/artist";

const Chapter03Task02 = () => {
    return (
        <>
            <h1>{artist.nickname} {artist.firstName} {artist.lastName}</h1>
            <span>{ artist.age }</span>
        </>
    );
};

export default Chapter03Task02;
