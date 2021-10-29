// import axios from "axios";

// useEffect (() => {
//     getTodos()
// }, [])

// const getTodos = async() => {
//     const todo = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/2')
//     setTodos(todo.data)
//     setFilteredTodos(todo.data)
// }

// <p className="todo" onDoubleClick={() => setEdit(true)}>
//                 {edit ? <Edit setEdit={setEdit} uuid={todo.uuid} editText={editText} /> : todo.name}
//             </p>
//             <div>
//                 {todo.createdAt.slice(0, 10)}
//             </div>