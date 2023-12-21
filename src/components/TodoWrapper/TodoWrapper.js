import { useState } from 'react'
import React from 'react'
import TodoForm from '../TodoForm'
import {v4 as uuidV4} from 'uuid';
import Todo from '../Todo';
import './TodoWrapper.css'
import TodoList from '../TodoList';
uuidV4();

const TodoWrapper = () => {

  const [todos, setTodos] = useState([])
  const [showTodoForm, setShowTodoForm] = useState(false)

  const addTodo = (todo) =>{
    setTodos([...todos, {
      id: uuidV4(),
      task: todo,
      isCompleted: false,
      isEditing: false
    }])
  }
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
  }

  const toggleTodoForm = () =>{
    setShowTodoForm(!showTodoForm)
  }
  return (
    <div>
        <div className='d-flex mb-5 align-items-center'>
          <h1 className='fw-bolder me-3'>Create New Task</h1>
          <button type='button' className='btn btn-dark rounded-circle'
          onClick={toggleTodoForm}>+</button>
        </div>
        {!showTodoForm && (
        <div className='w-100 position-relative'>
          <TodoForm addTodo={addTodo} toggleTodoForm={toggleTodoForm}></TodoForm>
        </div>
        )}
        <div className={`gap-3  ${todos.length === 0 ? 'd-none': 'd-md-flex'}`}>
          <div className='flex-grow-1 todo'>
            <h2 className='fw-bolder'>To Do</h2>
            <TodoList todos={todos.filter(todo => !todo.isCompleted)} toggleComplete={toggleComplete}/>
          </div>
          <div className='flex-grow-1 done'>
            <h2 className='fw-bolder'>Done</h2>
            <TodoList todos={todos.filter(todo => todo.isCompleted)} toggleComplete={toggleComplete}/>
          </div>
        </div>
    </div>
  )
}
export default TodoWrapper;