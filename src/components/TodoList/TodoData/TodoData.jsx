import { BsPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import "./TodoData.css";
export const TodoData = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className="tododata-container">
      {todos.map((todo) => (
        <div className="todo-data" key={todo.id}>
          <p>{todo.title}</p>
          <div className="icons">
            <button onClick={() => editTodo(todo.id)}>
              <BsPencilFill className="pen" />{" "}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <AiTwotoneDelete className="bin" />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
