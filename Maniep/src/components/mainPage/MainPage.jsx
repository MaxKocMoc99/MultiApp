import MainPageButton from "./MainPageButton"
import {Link} from 'react-router-dom'
import React from "react"
const MainPage = () => {
    const buttons = [
        {
            title: 'Todo', 
            id: 1, 
            path: '/todo'
        },
        {
            title: 'Calc', 
            id: 2, 
            path: '/calc'
        },
        {
            title: 'Stopwatch',
            id: 3,
            path: '/stopwatch'
        }
    ]
    const linkPage = (button) => {
        <Link to={button.path}/>
    }
    return ( 
        <div className=" w-1/2 flex justify-between absolute top-1/2 left-1/4">
          {buttons.map(button => (
         <MainPageButton linkPage={linkPage} button={button} key={button.id}/>
          ))}
        </div>
  )
}

export default MainPage