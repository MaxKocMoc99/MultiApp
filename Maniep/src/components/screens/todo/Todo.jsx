import TodoItem from "./TodoItem"
import { useState } from 'react'
import AddTodoField from "./AddTodoField"
const Todo = () => {
  const data = []
  const [todos, setTodos] = useState(data)
  const completeTodo = (id) => {
    const newTodos = [...todos]
    const neededTodo = newTodos.find(todo => todo.id === id)
    neededTodo.isEnded = !neededTodo.isEnded
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const newTodos = [...todos]
    setTodos([...todos].filter(todo => todo.id != id))
  }
  return (
    <div className="bg-neutral-900 h-screen text-white">
      <div className=" bg-slate-700 w-3/6 mx-auto h-5/6 rounded-lg absolute mt-10 left-1/4">
        <h1 className=" ml-5 mt-5 tracking-wide">Reminders</h1>
        <div className="mt-5 ml-6">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
        </div>
        <AddTodoField setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default Todo