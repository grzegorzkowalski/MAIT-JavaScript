const TodoItem = ({el, removeTodo}) => {
    return (
        <li>
            {el.value}
            <button onClick={() => removeTodo(el.id)}>
                usuń
            </button>
        </li>
    );
};

export default TodoItem;
