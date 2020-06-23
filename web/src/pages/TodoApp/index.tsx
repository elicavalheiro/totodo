import React from 'react';
import { IoMdCalendar } from 'react-icons/io';
import './styles.css';

import TodoItem from '../../components/TodoItem';

const TodoApp = () => {
  return(
    <div className="todo_container">
      <header className="todo_header">
        <div>
          <IoMdCalendar size={30} />
          <h1>22 jun, Monday</h1>
        </div>
        <p><strong>3</strong> tasks</p>
      </header>
      <ul className="todo_list">
        <TodoItem content="Create mood board" />
        <TodoItem content="Create the project concept" />
        <TodoItem content="Start the project in react" />
      </ul>
      <form className="todo_form">
        <input type="text" placeholder="Add a task..." />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default TodoApp;
