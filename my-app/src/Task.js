import Edit from "./Edit"
import { useState} from 'react'

function Task({ todo, removeTask, completeTodo, editText }) {
    const [edit, setEdit] = useState(false)

    return (
        <div key={new Date().toLocaleString()} className="task">
            <span>
                <label>
                    <input className="check" type="checkbox" onChange={ () => completeTodo(todo.id) } checked={ todo.completed }/>
                    <span></span>
                    <label></label>
                </label>
            </span>
            <button className="todo" onDoubleClick={() => setEdit(true)}>
                {edit ? <Edit setEdit={setEdit} id={todo.id} editText={editText} /> : todo.task}
            </button>
            <div>
                {todo.date}
            </div>
            <button className="remove" onClick={() => removeTask(todo.id)}>
                X
            </button>
        </div>
    )
}

export default Task