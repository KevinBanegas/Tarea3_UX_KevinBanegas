import React, {useState} from 'react'

export const Tarea = ({addTarea}) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      addTarea(value);
      setValue('');
    }
  }
  return (
    <form className='formTask' onSubmit={handleSubmit}>
    <input type="text" className='formTaskInput' value={value} placeholder='To Do: ' 
    onChange={(e)=> setValue(e.target.value)}/>
    <button type='submit' className='addTaskButton'>Add Task</button>
    </form>

  )
}