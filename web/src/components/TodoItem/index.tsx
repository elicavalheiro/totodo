import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

type TodoProps = {
  content: string,
}

const TodoItem = ({ content }: TodoProps) => {
  return(
    <li className="todo_item">
      <div>
        <label className="container">
          {content}
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <button><TiDeleteOutline size={25} /></button>
    </li>
  )
}

export default TodoItem;
