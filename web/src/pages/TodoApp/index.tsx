import React, { useState, useEffect, ChangeEvent, MouseEvent, FormEvent } from 'react';
import api from '../../services/api';
import './styles.css';

import { IoMdCalendar } from 'react-icons/io';
import { TiDeleteOutline } from 'react-icons/ti';

interface Task {
  id: number,
  content: string,
  done: boolean
}

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState({ content: '' });
  const [date, setDate] = useState();

  useEffect(() => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleString("en-US", options);

    setDate(date);
  })

  useEffect(() => {
    api.get('tasks').then(response => {
      setTasks(response.data);
    })
  })

  function handleChange( event: ChangeEvent<HTMLInputElement> ){
    const content = event.target.value;
    if(!content) return;
    setFormData({ content });
  }

  async function addTask( event: FormEvent ){
    event.preventDefault();

    await api.post('tasks', formData);

    setFormData({ content: '' });
  }

  async function deleteTask( event: MouseEvent<HTMLButtonElement> ){
    const task = event.currentTarget.value;
    await api.delete(`tasks/${task}`);
  }

  async function handleDoneTask(event: ChangeEvent<HTMLInputElement>){
    const taskId = parseInt(event.currentTarget.value);
    const task = tasks.find(task => task.id === taskId);
    const isDone = task!.done ? { done: false } : { done: true };

    await api.put(`tasks/${task!.id}`, isDone);
  }

  return(
    <div className="todo_container">
      <header className="todo_header">
        <div>
          <IoMdCalendar size={30} />
          <h1>{date}</h1>
        </div>
        <p><strong>{tasks.length}</strong> tasks</p>
      </header>
      <ul className="todo_list">
        {tasks.map(task => (
          <li className="todo_item" key={task.id}>
            <div>
              <label className="container">
                {task.content}
                <input type="checkbox" onChange={handleDoneTask} value={task.id} checked={task.done} />
                <span className="checkmark"></span>
              </label>
            </div>
            <button onClick={deleteTask} value={task.id}><TiDeleteOutline size={25} /></button>
          </li>
        ))}
      </ul>
      <form className="todo_form" onSubmit={addTask} >
        <input type="text" placeholder="Add a task..." onChange={handleChange} value={formData.content} />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default TodoApp;
