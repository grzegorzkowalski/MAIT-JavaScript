import people from "../data/people";

const Chapter03Task01 = () => {
    return (
        <ul>
            {
                people.map(el => <li key={el.id}>{el.name} {el.surname}</li>)
            }
        </ul>
    );
};

export default Chapter03Task01;
