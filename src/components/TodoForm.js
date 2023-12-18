import React, {useState} from 'react'

export const TodoForm = () => {
  const [task , setTask] = useState({
    "title": "",
    "description" : "",
    "author": "",
    "priority": "",
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

    console.log(task);
  }
  return (
    <div>
      <h2 className='fw-bolder'>Create task</h2>
       <form onSubmit={handleSubmit}>

          <input type="text" className='form-control w-100 my-3' placeholder='Title'
          value={task.title} name='title'
          onChange={handleChange}/>

          <input type="text" className='form-control w-100 my-3' placeholder='Description'
          value={task.descrption} name='description'
          onChange={handleChange}/>

          <input type="text" className='form-control w-100 my-3' placeholder='Author'
          value={task.author} name='author'
          onChange={handleChange}/>

          <select className='form-control my-3'
          name="priority" value={task.priority} onChange={handleChange}>
            <option key="none" disabled hidden>Priority</option>
            <option value="high" key="high">high</option>
            <option value="medium" key="medium">medium</option>
            <option value="low" key="low">low</option>
          </select>
          <div className='text-end'>
            <button type='submit' className='btn btn-secondary'>Create</button>
          </div>
       </form>
    </div>
  )
}
