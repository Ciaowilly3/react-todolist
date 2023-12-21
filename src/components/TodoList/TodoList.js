import React from 'react'
import Todo from '../Todo'

const TodoList = ({todos, toggleComplete}) => {
  return (
    <div>
    {
    todos
        .map((todo, index) => (
        <Todo todo={todo} key={index}
        toggleComplete={toggleComplete}/>
      ))}
    </div>
  )
}

export default TodoList