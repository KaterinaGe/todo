import React from "react";
import { useState, useEffect } from 'react';
import Task from "./Task";
import Add from "./Add";
import Filter from "./Filter"
import Pages from "./Pages";
import Error from "./Error";
import axios from "axios";
import 'antd/dist/antd.css';


function App() {
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [order, setOrder] = useState('asc')
  const TASK_PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')


  useEffect (() => { 
    getTodos()
  }, [ order, filterBy ])
    
  const getTodos = async() => {
    try {
      setCurrentPage(1)
      const todo = await axios.get(`http://localhost:5000/todos?filterBy=${filterBy}&order=${order}`)
      setFilteredTodos(todo.data)
    } catch (error) {
      setMessage(error.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const addTask = async (userInput) => {
    try{
      setFilterBy('all')
      setOrder('sortDown')
      if (userInput) {
        await axios.post('http://localhost:5000/todo', {
          name: userInput,
          done: false
        })
        getTodos()
      }
    } catch(error) {
      setMessage(error.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const editText = async (id, userEdit, complete) => {
    try{
      await axios.put(`http://localhost:5000/todo/${id}`, {
        name: userEdit,
        done: complete
      })
      getTodos()
    } catch(error) {
      setMessage(error.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const completeTodo = async (todo, complete ) => {
    try {     
      await axios.put(`http://localhost:5000/todo/${todo.uuid}`, {
        name: todo.name,
        done: !complete 
      })
      getTodos()
    } catch (error) {
      setMessage(error.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    } 
  }

  const removeTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/${id}`)
      setFilteredTodos(filteredTodos.filter(todo => todo.uuid !== id))
      if (currentPageTodo.length === 1) {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1)
        }
      }
    } catch(error) {
      setMessage(error.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const lastPage = currentPage * TASK_PER_PAGE
  const firstPage = lastPage - TASK_PER_PAGE
  const currentPageTodo = filteredTodos.slice(firstPage, lastPage)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredTodos.length / TASK_PER_PAGE))
      setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1)
      setCurrentPage(currentPage - 1)
  }

  const errorWindow = () => {
    setError(false)
  }

  return (
    <div className="app">
      <header>
        <h1 className="h1">ToDo</h1>
      </header>       
      <Add 
        className="add" 
        addTask={addTask}
        filteredTodos={filteredTodos}
      />
      <Filter
        setOrder={setOrder}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        order={order}
      />
      {currentPageTodo.map((todo, uuid) => {
        return (
          <Task
            completeTodo={completeTodo}
            todo={todo}
            key={uuid}
            removeTask={removeTask}
            className="tasks"
            editText={editText}
          />
        )
      })}
      {filteredTodos.length > 5 &&
        <Pages
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          TASK_PER_PAGE={TASK_PER_PAGE}
          total={filteredTodos.length}
          paginate={paginate}
        />}
      <Error 
        error={error}
        errorWindow={errorWindow}
        message={message}
      />
    </div>
  );
}

export default App;
