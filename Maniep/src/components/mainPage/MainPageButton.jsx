import { Link } from "react-router-dom"
const MainPageButton = ({ button}) => {
    return (
        <Link to={button.path} className=" bg-cyan-600 w-1/4 h-8 border rounded-lg border-blue-300 text-white flex justify-center items-center">
          {button.title}
   </Link>
  )
}

export default MainPageButton