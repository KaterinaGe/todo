function Task({ todo, date, removeTask }) {
    return (
        <div key={todo.id} className="task">
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        id={Math.random().toString(36).substr(2,9)} 
                        className="check"
                    />
                </label>
            </div>
            <div>
                {todo.task}
            </div>
            <div>
                {(new Date()).toLocaleString()}
            </div>
            <div className="remove" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default Task