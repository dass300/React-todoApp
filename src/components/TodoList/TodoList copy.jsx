import { TodoData } from "./TodoData/TodoData";
import { EditData } from "./EditData/EditData";
import "../TodoList/TodoList.css";
import { TodoInput } from "./TodoInput/TodoInput";

export const TodoList = () => {
  return (
    <div className="todolist-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoInput />
      <TodoData />
      <EditData />
    </div>
  );
};
