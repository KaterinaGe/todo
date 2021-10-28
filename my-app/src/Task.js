import Edit from "./Edit"
import { useState} from 'react'

function Task({ todo, removeTask, completeTodo, editText }) {
    const [edit, setEdit] = useState(false)

    return (
        <div  className="task">
            <span>
                <label>
                    <input className="check" type="checkbox" todo={todo} onChange={ () => completeTodo(todo.uuid, todo.done) } checked={ todo.done }/>
                    <span></span>
                    <label></label>
                </label>
            </span>
            <p className="todo" onDoubleClick={() => setEdit(true)}>
                {edit ? <Edit todo={todo} defaultValue={todo.name} setEdit={setEdit} editText={editText} /> : todo.name}
            </p>
            <div>
                {todo.createdAt.slice(0, 10)}
            </div>
            <button className="remove" onClick={() => removeTask(todo.uuid)}>
                X
            </button>
        </div>
    )
}

export default Task