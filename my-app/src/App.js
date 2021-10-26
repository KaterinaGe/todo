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
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('sortDown')
  const TASK_PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(1)

  useEffect (() => {
      getTodos()
  }, [filteredTodos, ])
    
  const getTodos = async() => {
      const todo = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/2')
      setTodos(todo.data)
      setFilteredTodos(todo.data)
  }

  const addTask = (userInput) => {
    setFilter('all')
    setSort('sortDown')
    if (userInput) {
      const newItem = axios.post('https://todo-api-learning.herokuapp.com/v1/tasks/2', {
        name: userInput,
        done: false
      })
      setTodos([newItem.data, ...todos])
      setFilteredTodos([newItem.data, ...todos])
    }
  }

  const editText = (id, value) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.task = value
        }
        return todo
      })
    )
  }

  const completeTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const handleFiltering = (value) => {
    setCurrentPage(1)
    if (value === 'all') {
      setFilter('all')
      setFilteredTodos([...todos]);
    }
    if (value === 'done') {
      setFilter('done')
      setFilteredTodos([...todos.filter(todo => todo.completed === true)])
    }
    if (value === 'undone') {
      setFilter('undone')
      setFilteredTodos([...todos.filter(todo => todo.completed === false)])
    }
  }

  const sortedTodos = (sort) => {
    const sortedTodos = [...filteredTodos]
    if (sort === 'sortDown') {
      sortedTodos.sort((a, b) => b.id - a.id)
      setSort('sortDown')
      setFilteredTodos(sortedTodos)
    }
    if (sort === 'sortUp') {
      sortedTodos.sort((a, b) => a.id - b.id)
      setSort('sortUp')
      setFilteredTodos(sortedTodos)
    }
  }


  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
    setFilteredTodos([...todos.filter(todo => todo.id !== id)])
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
        handleFiltering={handleFiltering}
        filter={filter}
        sorted={sortedTodos}
        sort={sort}
      />
      {currentPageTodo.map((todo) => {
        return (
          <Task
            done={completeTodo}
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
