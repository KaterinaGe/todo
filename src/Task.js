import Edit from "./Edit"
import { useState} from 'react'
import 'antd/dist/antd.css';
import { Checkbox, Button, Form } from 'antd'

function Task({ todo, removeTask, completeTodo, editText }) {
    const [edit, setEdit] = useState(false)

    return (
        <Form className="task">
            <Checkbox className="check" todo={todo} onChange={ () => completeTodo(todo, todo.done, !todo.done) } checked={ todo.done }/>    
            <div className="todo" onDoubleClick={() => setEdit(true)}>
                {edit ? <Edit todo={todo} defaultValue={todo.name} setEdit={setEdit} editText={editText} /> : todo.name}
            </div>
            <div>
                {todo.created_at.slice(4, 25)}
            </div>
            <Button className="remove" onClick={() => removeTask(todo.uuid)}>
                X
            </Button>
        </Form>
    )
}

export default Task