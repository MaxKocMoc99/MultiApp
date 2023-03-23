import {AiOutlinePlus} from 'react-icons/ai'
const AddTodoButton = ({addTodo, title}) => {
  return (
      <button className=" rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center">
          <AiOutlinePlus onClick={() => addTodo(title)} size={24}/>
      </button>
  )
}

export default AddTodoButton