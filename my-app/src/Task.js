function Task({ todo, removeTask }) {
    return (
        <div key={todo.id} className="task">
            <div>
                <button>
                    <input 
                        type="checkbox" 
                        id={Math.random().toString(36).substr(2,9)}
                        className="check"
                    />
                </button>
            </div>
            <div>
                {todo.task}
            </div>
            <div>
                {(new Date()).toLocaleString()}
            </div>
            <button className="remove" onClick={() => removeTask(todo.id)}>
                X
            </button>
        </div>
    )
}

export default Task