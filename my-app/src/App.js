import React from "react";
import { useState } from 'react';
import Task from "./Task";
import TodoList from "./TodoList";
import Filter from "./Filter"

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const date = new Date()

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        completed: false,
        date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
      }
      setTodos([...todos, newItem])
      setFilteredTodos([...todos, newItem])
    }
  }

  const completeTodo = id => {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    ) 
  }

  const  handleFiltering = (filter) => {       
    if (filter === 'all') {
      return setFilteredTodos([...todos]);
    }      
    const filtered = [...todos.filter(todo => 
      filter === 'done' 
      ? todo.completed 
      : !todo.completed)];
      
    setFilteredTodos(filtered)
  }

  const sortedTodos = (sort) => {
    if (sort === 'sortDown') {
      const newSort = []
      const sort = todos.sort((a,b) => b.id - a.id)
      Object.assign(newSort, sort)
      setFilteredTodos(newSort)
    }
    if (sort === 'sortUp') {
      const newSort = []
      const sort = todos.sort((a,b) => a.id - b.id)
      Object.assign(newSort, sort)
      setFilteredTodos(newSort)
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
    setFilteredTodos([...todos.filter(todo => todo.id !== id)])
  }

  return (
    <div className="app">
      <header>
        <h1 className="h1">ToDo</h1>
      </header>
      <div className="add">
        <p className="sum">{todos.length} tasks</p>
        <TodoList addTask={addTask} />
      </div>
      <Filter        
        filter={handleFiltering}
        sort={sortedTodos}
      />
      {filteredTodos.map((todo) => {
        return (
          <Task
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            className="tasks"
          />
        )
      })}
    </div>
  );
}

export default App;
