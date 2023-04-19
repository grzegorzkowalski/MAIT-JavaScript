import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
    const [todo, setTodo] = useState([]);
    const [newElement, setNewElement] = useState("");
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addTodo = () => {
        const temp = {};
        temp.value = newElement;
        temp.id = getRandomInt(1, 1000000);
        setTodo(prev => {
            return [...prev, temp];
        });
        setNewElement("");
    }

    const removeTodo = (id) => {
        setTodo(prev => {
            return prev.filter(el => el.id !== id);
        });
    }

    return (
        <div>
            <input
                value={newElement}
                onChange={(e) => setNewElement(e.target.value)}
            />
            <button onClick={addTodo}>Dodaj</button>
            <ul>
                {
                    todo.map(el => {
                        return (
                            <TodoItem
                                removeTodo={removeTodo}
                                key={el.id}
                                el={el}
                            />
                        )
                    } )
                }
            </ul>
        </div>
    );
};

export default TodoApp;
