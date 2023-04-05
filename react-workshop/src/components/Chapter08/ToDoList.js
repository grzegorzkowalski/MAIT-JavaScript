import { useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState([]);

    const listHandler = () => {
        setList(prev => [...prev, prev.length+1])
    }

    return (
        <>
          <button onClick={listHandler}>Dodaj zadanie</button>
          <ul>
              {
                  list.map(el => <li key={el}>Zadanie {el}</li>)
              }
          </ul>
        </>
    );
};

export default ToDoList;
