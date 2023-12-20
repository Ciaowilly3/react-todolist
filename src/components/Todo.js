import React from 'react'
import "../style-components/TodoStyle.css"

export const Todo = ({todo, toggleComplete}) => {
  console.log(todo)
  return (
    <div className={`${todo.completed? ' bg-success ' : ''} ` + ' border rounded my-3 p-3'}>
      <div className='d-flex align-items-center'>
        <h6 className='text-start m-0 fw-bold'>{todo.task.title}</h6>
        <div className='red-bar'></div>
      </div>
      <div>
        <p className='text-start'>
          {todo.task.description}
        </p>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
        <span>{todo.task.author}</span>
        <button className='btn btn-secondary px-3'
        onClick={() => toggleComplete(todo.id)}>
          Done
      </button>
      </div>
    </div>
  )
}
