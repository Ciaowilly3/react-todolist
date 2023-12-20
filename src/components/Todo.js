import React from 'react'
import "../style-components/TodoStyle.css"

export const Todo = ({todo, toggleComplete}) => {
  const setPriority = () =>{
    let colour = 'green-bar';
    if(todo.task.priority === 'high'){
      colour = 'red-bar';
    }
    else if(todo.task.priority === 'medium'){
      colour = 'yellow-bar';
    }
    return colour;
  }
  return (
    <div className={'border rounded my-3 p-3 shadow bg-white'}>
      <div className='d-flex align-items-center'>
        <h6 className='text-start m-0 fw-bold'>{todo.task.title}</h6>
        <div className={setPriority()  + ' bar'}></div>
      </div>
      <div>
        <p className='text-start'>
          {todo.task.description}
        </p>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
        <span>Made by: {todo.task.author}</span>
        <button className={'btn btn-secondary px-3 '+ `${todo.completed === true ? 'd-none': ''}`}
        onClick={() => toggleComplete(todo.id)}>
          Done
      </button>
      </div>
    </div>
  )
}
