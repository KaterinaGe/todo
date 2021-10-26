import Edit from "./Edit"
import { useState} from 'react'

function Task({ todo, removeTask, completeTodo, editText }) {
    const [edit, setEdit] = useState(false)

    return (
        <div  className="task">
            <span>
                <label>
                    <input className="check" type="checkbox" onChange={ () => completeTodo(todo.uuid) } checked={ todo.done }/>
                    <span></span>
                    <label></label>
                </label>
            </span>
            <p className="todo" onDoubleClick={() => setEdit(true)}>
                {edit ? <Edit setEdit={setEdit} id={todo.id} editText={editText} /> : todo.name}
            </p>
            <div>
                {todo.createdAt.slice(0, 10)}
            </div>
            <button className="remove" onClick={() => removeTask(todo.id)}>
                X
            </button>
        </div>
    )
}

export default Task