import React from 'react'
export const Manager = ({task, checkedTask, isChecked}) => {
  const handleCheck = e => {
    checkedTask(task.id)
  }
  return (
    <div className='TaskManager'>
      <p className={isChecked ? 'done' : ''}>{task.task}</p>
      <div>
        <input type='checkbox' checked={isChecked} onChange={handleCheck}/>
      </div>
      
    </div>
  )
}