import React from "react";
import { useState } from 'react';
import Task from "./Task";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className="app">
      <header>
        <h1 className="h1">ToDo {todos.length}</h1>
      </header>
      <TodoList addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            className="tasks"
            />
        )
      })}
    </div>
  );
        
        {/* <input type="text" className="input" placeholder="I want to..."/>

        <li className="sort">
          <button className="status"> All </button>
          <button className="status"> Done </button>
          <button className="status"> Undone </button>

          <p className="lettering"> Sort by Date </p>

          <button className="arrow"> 
            <img src="img/top.png" className="arrow-img"/>
          </button>
          <button className="arrow">
            <img src="img/button.png" className="arrow-img"/> 
          </button>
        </li>

        <ul className="todo-list">
          <li className="task">
            <input className="check" id="check" type="checkbox"/>
            <label for="check" data-tooltip="Check"></label>
            <p className="text"> Do something </p>
            <p className="date"> 12/10/2020 </p>
            <button className="remove" data-tooltip="Remove">
              <img src="img/trash.png" className="trash"/>
            </button>
          </li>

          <li className="task"> 
            <input className="check" id="check2" type="checkbox"/>
            <label for="check2" data-tooltip="Check"></label>
            <p className="text"> Do more </p>
            <p className="date"> 12/10/2020 </p>
            <button className="remove" data-tooltip="Remove">
              <img src="img/trash.png" className="trash"/>
            </button>
          </li>

          <li className="task"> 
            <input className="check" id="check3" type="checkbox"/>
            <label for="check3" data-tooltip="Check"></label>
            <p className="text"> Learn React </p>
            <p className="date"> 12/10/2020 </p>
            <button className="remove" data-tooltip="Remove">
              <img src="img/trash.png" className="trash"/>
            </button>
          </li>

          <li className="task">
            <input className="check" id="check4" type="checkbox"/>
            <label for="check4" data-tooltip="Check"></label>
            <p className="text">7WTZ o_O </p>
            <p className="date"> 12/10/2020 </p>
            <button className="remove" data-tooltip="Remove">
              <img src="img/trash.png" className="trash"/>
            </button>
          </li>

          <li className="task"> 
            <input className="check" id="check5" type="checkbox"/>
            <label for="check5" data-tooltip="Check"></label>
            <p className="text"> Authorization </p>
            <p className="date"> 12/10/2020 </p>
            <button className="remove" data-tooltip="Remove">
              <img src="img/trash.png" className="trash"/>
            </button>
          </li>
        </ul>

        <ul className="pages">
          <button className="page">  </button>
          <button className="page"> 1 </button>
          <button className="page-highlight"> 2 </button>
          <button className="page"> 3 </button>
          <button className="page"> 4 </button>
          <button className="page"> 5 </button>
          <button className="page">  </button>
        </ul> */}
}

export default App;
