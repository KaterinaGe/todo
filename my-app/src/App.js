import React from "react";
import { useState, useEffect } from 'react';
import Task from "./Task";
import Input from "./Input";
import Filter from "./Filter"
import Pages from "./Pages";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [order, setOrder] = useState('asc')
  const TASK_PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(1)

  useEffect (() => {
    getTodos()
  }, [ order, filterBy ])
    
  const getTodos = async() => {
    setCurrentPage(1)
    const todo = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/2?filterBy=${filterBy}&order=${order}`)
    setTodos(todo.data)
    setFilteredTodos(todo.data)
  }

  const addTask = async (userInput) => {
    setFilterBy('all')
    setOrder('sortDown')
    if (userInput) {
      await axios.post('https://todo-api-learning.herokuapp.com/v1/task/2', {
        name: userInput,
        done: false
      })
      getTodos()
    }
  }

  const editText = async (id, userEdit, complete) => {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`, {
      name: userEdit,
      done: complete
    })
    setTodos(
      todos.map(todo => {
        if (todo.uuid === id) {
          todo.name = userEdit
        }
        return todo
      })
    )
  }

  const completeTodo = async (id, userEdit, complete) => {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`, {
      name: userEdit,
      done: !complete
    })
    setTodos(
      todos.map(todo => {
        if (todo.uuid === id) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  const removeTask = async (id) => {
    await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`)
    setFilteredTodos(filteredTodos.filter(todo => todo.uuid !== id))
    if (currentPageTodo.length === 1) {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
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
      {currentPageTodo.map((todo) => {
        return (
          <Task
            completeTodo={completeTodo}
            todo={todo}
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
    </div>
  );
}

export default App;
