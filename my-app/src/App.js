import React from "react";
import { useState } from 'react';
import Task from "./Task";
import TodoList from "./TodoList";
import Filter from "./Filter"
import Pages from "./Pages";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const date = new Date() 
  const [pages] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [value, setValue] = useState(filteredTodos)

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        completed: false,
        date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
      }
      setTodos([newItem, ...todos])
      setFilteredTodos([newItem, ...todos])
    }
  }

  const handleChange = (e) => {
    if(e.key === "Enter") {
      setValue(prompt("Now I want...", value))
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

  const lastPage = currentPage * pages
  const firstPage = lastPage - pages
  const currentPageTodo = filteredTodos.slice(firstPage, lastPage)

  const nextPageArrow = ">>"
  const prevPageArrow = "<<"

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const nextPage = () => {
    if (currentPage != Math.ceil(filteredTodos.length / pages)) 
    setCurrentPage (currentPage + 1) }
  const prevPage = () => {
    if (currentPage != 1) 
    setCurrentPage (currentPage - 1)}

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
      {currentPageTodo.map((todo) => {
        return (
          <Task
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            className="tasks"
            onClick={handleChange}
          />
        )
      })}
      <div className="pages">
        <button className="prevPage"onClick={prevPage}> {prevPageArrow} </button>
        <Pages 
          pages={pages}
          total={filteredTodos.length}
          paginate={paginate}
        />
        <button className="nextPage" onClick={nextPage}> {nextPageArrow} </button>
      </div>
    </div>
  );
}

export default App;
