import React, {useState} from 'react'
import "../style-components/TodoFormStyle.css"

export const TodoForm = ({addTodo, toggleTodoForm}) => {
  const [task , setTask] = useState({
    "title": "",
    "description" : "",
    "author": "",
    "priority": "none",
  });

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setTask((prevTask) =>({
      ...prevTask,
      [name] : value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(task);

    setTask({
      "title": "",
      "description" : "",
      "author": "",
      "priority": "none",
    });

    toggleTodoForm();
  }
  return (
    <div className='form-container'>
      <h2 className='fw-bolder'>Create task</h2>
       <form onSubmit={handleSubmit}>

          <input type="text" className='my-form-control w-100 my-3' placeholder='Title'
          value={task.title} name='title'
          onChange={handleChange}/>

          <input type="text" className='my-form-control w-100 my-3' placeholder='Description'
          value={task.description} name='description'
          onChange={handleChange}/>

          <input type="text" className='my-form-control w-100 my-3' placeholder='Author'
          value={task.author} name='author'
          onChange={handleChange}/>

          <select className='my-form-control my-3'
          name="priority" value={task.priority}  onChange={handleChange}>
            <option key="none" hidden >Priority</option>
            <option value="high" key="high">high</option>
            <option value="medium" key="medium">medium</option>
            <option value="low" key="low">low</option>
          </select>
          <div className='d-flex justify-content-between pt-2'>
            <button type='button' className='btn btn-danger' onClick={toggleTodoForm}>Delete</button>
            <button type='submit' className='btn btn-secondary' >Create</button>
          </div>
       </form>
    </div>
  )
}
