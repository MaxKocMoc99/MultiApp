import CheckBox from './CheckBox'
import {BsBookmark} from 'react-icons/bs'
const TodoItem = ({todo, completeTodo, removeTodo}) => {
    return (
        <div className='flex h-6 w-5/6 mt-3 items-center justify-between tracking-wide'>
            <button onClick={() => completeTodo(todo.id)} className='flex items-center'>
            <CheckBox size={24} isEnded={todo.isEnded}/>
            <div className='ml-4'>{todo.title}</div>
            </button>
          <button onClick={() => removeTodo(todo.id)}><BsBookmark size={24} className='fill-blue-700'/></button>
      </div>
  )
}

export default TodoItem