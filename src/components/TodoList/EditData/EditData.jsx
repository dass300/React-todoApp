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
      <input
        type="text"
        value={editedTodo}
        onChange={(event) => setEditedTodo(event.target.value)}
        placeholder= "Editing current todo item..."/>
      <button onClick={handleSave}>save</button>
      <button onClick={cancelEdit} className="cancel-button">
        cancel
      </button>
    </div>
  );
};
