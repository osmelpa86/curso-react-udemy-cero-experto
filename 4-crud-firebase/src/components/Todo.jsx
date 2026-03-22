import {useState} from "react";

export const Todo = ({todo, handleDelete, toggleComplete, handleEdit}) => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleChange = (e) => {
        if (todo.completed === true) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    };

    return (
        <div className="todo">
            <input value={todo.title === "" ? newTitle : todo.title}
                   style={{textDecoration: todo.completed && "line-through"}}
                   onChange={handleChange}/>
            <div>
                <button className="button-complete" onClick={() => toggleComplete(todo)}>Marcar</button>
                <button className="button-edit" onClick={() => handleEdit(todo, newTitle)}>Editar</button>
                <button className="button-delete" onClick={() => handleDelete(todo.id)}>Eliminar</button>
            </div>
        </div>
    )
}