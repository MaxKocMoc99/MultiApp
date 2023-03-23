import { useState } from "react"
import AddTodoButton from "./AddTodoButton"
const AddTodoField = ({ setTodos }) => {
    const addTodo = (title) => {
        setTodos(prev => [{
          id: Math.random(),
          title, 
          isEnded: false
        }, ...prev,])
        setTitle('')
      }
    const [title, setTitle] = useState('')
  return (
      <div className=" absolute bottom-10 left-6 w-5/6 h-12 flex items-center justify-between">
          <input className=" bg-inherit border border-none outline-none" placeholder="Add a new item"
              onChange={e => setTitle(e.target.value)} value={title}/>
  <AddTodoButton title={title} addTodo={addTodo}/>
    </div>
  )
}

export default AddTodoField