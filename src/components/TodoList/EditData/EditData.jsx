/* eslint-disable react/prop-types */
import { useState } from "react";
import "./EditData.css";

export const EditData = ({ todo, saveTodo, cancelEdit }) => {
  const [editedTodo, setEditedTodo] = useState(todo.title);

  const handleSave = () => {
    saveTodo({
      ...todo,
      title: editedTodo
    });
  };
  return (
    <div className="edit-data">
      {!todo.completed && (
        <>
          <input
            autoFocus
            type="text"
            value={editedTodo}
            onChange={(event) => setEditedTodo(event.target.value)}
            disabled={todo.completed}
            placeholder="Editing current todo item..."
          />

          <button onClick={handleSave}>save</button>
          <button onClick={cancelEdit} className="cancel-button">
            cancel
          </button>
        </>
      )}
    </div>
  );
};
