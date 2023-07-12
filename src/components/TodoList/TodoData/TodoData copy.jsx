import { BsPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import "./TodoData.css";
export const TodoData = () => {
  return (
    <div className="tododata-container">

      <div className="todo-data">
        <p>This is a todo item</p>
        <div className="icons">
         <button><BsPencilFill  className="pen" /> </button>
         <button><AiTwotoneDelete className="bin" /> </button>
        </div>
      </div>

      <div className="todo-data">
        <p>This is a todo item</p>
        <div className="icons">
         <button><BsPencilFill  className="pen" /> </button>
         <button><AiTwotoneDelete className="bin" /> </button>
        </div>
      </div>
      
      <div className="todo-data">
        <p>This is a todo item</p>
        <div className="icons">
         <button><BsPencilFill  className="pen" /> </button>
         <button><AiTwotoneDelete className="bin" /> </button>
        </div>
      </div>

      

      

    </div>
  );
};
