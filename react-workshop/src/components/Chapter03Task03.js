import people from "../data/people";

const Chapter03Task03 = () => {
    return (
        <>
            {
                people.map(el => {
                    return (
                        <div className="person" key={el.id}>
                            <img src={el.avatar}/>
                            <div className="info">
                                <h1>{el.title} {el.name} {el.surname}</h1>
                                <p>{el.bio}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Chapter03Task03;
