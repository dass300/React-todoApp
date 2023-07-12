import { useState } from 'react';
import './TodoInput.css'

export const TodoInput = ({addTodo}) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event)=>{
event.preventDefault()
if(todo.trim() !== ""){
  addTodo(todo)
  setTodo("")
}
  }
  return (
    <form  onSubmit={handleSubmit} className="todo-input-container">
      <input type="text" value={todo} onChange={event => setTodo(event.target.value)} placeholder="New Todo..." autoFocus />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
