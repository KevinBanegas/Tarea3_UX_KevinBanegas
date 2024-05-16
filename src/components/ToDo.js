import React, { useState, useEffect } from "react";
import { Tarea } from "./Tarea";
import { v4 as uuidv4 } from "uuid";
import { Manager } from "./Manager";
uuidv4();
export const ToDo = () => {
  const [taskMade, setTaskMade] = useState([]);

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("taskMade")) || [];
    setTaskMade(savedTask);
  }, []);
    
  const addTarea = (taskParameter) => {
    setTaskMade([
      ...taskMade,
      { id: uuidv4(), task: taskParameter, done: false },
    ]);
    localStorage.setItem("taskMade", JSON.stringify(taskMade));
  };
  const deleteAllTaskMade = (id) => {
    setTaskMade([]);
    localStorage.removeItem("taskMade");
  }
  const checkedTask = (id) => {
    const updatedTasks = taskMade.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTaskMade(updatedTasks);
    localStorage.setItem("taskMade", JSON.stringify(updatedTasks));
  }
  const deleteCompleted = () => {
    const updatedTasks = taskMade.filter((task) => !task.done);
    setTaskMade(updatedTasks);
    localStorage.setItem("taskMade", JSON.stringify(updatedTasks));
  }

  return (
    <div className="ToDo">
      <h1>To Do</h1>
      <Tarea addTarea={addTarea} />
      {taskMade.map((task, index) => (
        <Manager key={index} task={task} checkedTask={checkedTask} isChecked={task.done}/>
      ))}
      <div className="buttonGroup">
      <button className="deleteDoneButton" onClick={deleteCompleted}>Delete Done</button>
        <button className="deleteAllButton" onClick={deleteAllTaskMade}>Delete All</button>
      
      </div>
    </div>
  );
};