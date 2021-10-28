import React from "react";
import { useState, useEffect } from 'react';
import Task from "./Task";
import Input from "./Input";
import Filter from "./Filter"
import Pages from "./Pages";
import Error from "./Error";
import axios from "axios";


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
      const todo = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/2?filterBy=${filterBy}&order=${order}`)
      setFilteredTodos(todo.data)
    } catch (error) {
      setMessage(error.response.data.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
    
  }

  const addTask = async (userInput) => {
    try{
      setFilterBy('all')
      setOrder('sortDown')
      if (userInput) {
        await axios.post('https://todo-api-learning.herokuapp.com/v1/task/2', {
          name: userInput,
          done: false
        })
        getTodos()
      }
    } catch(error) {
      setMessage(error.response.data.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
    
  }

  const editText = async (id, userEdit, complete) => {
    console.log(complete)
    try{
      await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`, {
        name: userEdit,
        done: complete
      })
      getTodos()
    } catch(error) {
      setMessage(error.response.data.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const completeTodo = async (todo, userInput, complete ) => {
    console.log(complete)
    try {     
      await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/2/${todo.uuid}`, {
        name: userInput,
        done: !complete 
      })
      getTodos()
    } catch (error) {
      setMessage(error.response.data.message)
      setError(true)
      setTimeout(() => setError(false), 5000)
    } 
  }

  const removeTask = async (id) => {
    try {
      await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`)
      setFilteredTodos(filteredTodos.filter(todo => todo.uuid !== id))
      if (currentPageTodo.length === 1) {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1)
        }
      }
    } catch(error) {
      setMessage(error.response.data.message)
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
      <div className="add">
        <p className="sum">{filteredTodos.length} tasks</p>
        <Input addTask={addTask}/>
      </div>
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
