import { TodoData } from "./TodoData/TodoData";
import { EditData } from "./EditData/EditData";
import "../TodoList/TodoList.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { useState } from "react";

export const TodoList = () => {
  
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title
    };
    setTodos([...todos, newTodo]);
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditTodoId(id);
  };

  const saveTodo = (editedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );

    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
  };

  return (
    <div className="todolist-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoInput addTodo={addTodo} />
      <TodoData todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      {editTodoId !== null && (
        <EditData
          todo={todos.find((todo) => todo.id === editTodoId)}
          saveTodo={saveTodo}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};
