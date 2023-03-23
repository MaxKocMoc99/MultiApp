import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from '../mainPage/MainPage'
import Calc from '../screens/calc/Calc'
import Stopwatch from '../screens/stopwatch/Stopwatch'
import Todo from '../screens/todo/Todo'
const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<Calc/>} path='/calc' />
            <Route element={<Todo />} path='/todo' />
            <Route element={<Stopwatch/>} path='/stopwatch' />
            <Route element={<div>Not found</div>} path='*'/>
      </Routes>
  </BrowserRouter>
}

export default Router