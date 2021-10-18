function Task({ todo, removeTask, completeTodo }) {
    return (
        <div key={new Date().toLocaleString()} className="task">
            <span>
                <label>
                    <input className="check" type="checkbox" onChange={ () => completeTodo(todo.id) } checked={ todo.completed }/>
                    <span></span>
                    <label></label>
                </label>
            </span>
            <div>
                {todo.task}
            </div>
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