import { useState } from 'react'
import React from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidV4} from 'uuid';
import { Todo } from './Todo';
uuidV4();

export const TodoWrapper = () => {

  const [todos, setTodos] = useState([])
  const [showTodoForm, setShowTodoForm] = useState(false)

  const addTodo = (todo) =>{
    setTodos([...todos, {
      id: uuidV4(),
      task: todo,
      completed: false,
      isEditing: false
    }])
  }
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
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
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index}
          toggleComplete={toggleComplete}/>
        ))}
    </div>
  )
}
