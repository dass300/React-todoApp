import React from "react";
import './TodoInput.css'
export const TodoInput = () => {
  return (
    <div className="todo-input-container">
      <input type="text" placeholder="New Todo..." autoFocus />
      <button>Add Todo</button>
    </div>
  );
};
