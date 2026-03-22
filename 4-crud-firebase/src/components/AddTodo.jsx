import {collection, addDoc} from "firebase/firestore"
import {useState} from "react";
import {db} from "../data/firebase.js";

export const AddTodo = () => {
    const [title, setTitle] = useState('');

    const insert = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {title, completed: false});
            setTitle("");
        }
    }

    return (
        <form onSubmit={insert}>
            <div className="input_container">
                <input
                    type="text"
                    placeholder="Ingrese tarea"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="btn_container">
                <button>Insertar</button>
            </div>
        </form>
    )
}