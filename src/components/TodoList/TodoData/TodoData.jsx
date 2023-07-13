/* eslint-disable react/prop-types */
import { BsPencilFill } from "react-icons/bs";
import { FaStrikethrough } from "react-icons/fa";
import "./TodoData.css";
export const TodoData = ({ todos, editTodo, toggleStrikeThrough }) => {
  return (
    <div className="tododata-container">
      {todos.map((todo) => (
        <div className="todo-data" key={todo.id}>
          <p
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "rgb(150 20 10 )" : "inherit"
            }}
          >
            {todo.title}
          </p>

          <div className="icons">
            {!todo.completed && (
              <button onClick={() => editTodo(todo.id)}>
                <BsPencilFill className="pen" />{" "}
              </button>
            )}
            <button onClick={() => toggleStrikeThrough(todo.id)}>
              <FaStrikethrough className="bin" />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
