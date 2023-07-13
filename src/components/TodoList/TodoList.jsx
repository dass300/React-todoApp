import { TodoData } from "./TodoData/TodoData";
import { EditData } from "./EditData/EditData";
import "../TodoList/TodoList.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };


  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo.completed) {
      setEditTodoId(id);
    }
  };


  const saveTodo = (editedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
    setEditTodoId(null);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
  };

  const toggleStrikeThrough = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todolist-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoInput addTodo={addTodo} />

      <TodoData
        todos={todos}
        editTodo={editTodo}
        toggleStrikeThrough={toggleStrikeThrough}
      />

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
