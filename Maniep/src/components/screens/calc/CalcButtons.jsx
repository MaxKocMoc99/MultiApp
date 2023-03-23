import { BsPlusSlashMinus, BsPercent, BsPlus,BsArrowCounterclockwise} from 'react-icons/bs'
import { RiDivideLine } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineMinus } from 'react-icons/ai'
import {TbEqual} from 'react-icons/tb'
const CalcButtons = ({value, setValue, setResult}) => {
  const valueClick = (e) => {
    setValue(value.concat(e.target.id))
    }
    const clear = () => {
      setValue('')
      setResult('')
    }
    const cFunction = () => {
      setValue(value.slice(0, -1))
    }
    const calculate = () => {
      try {
        setResult(eval(value).toString())
      }
      catch(err) {
        setResult('Error')
      }
    }
    const percentFunction = () => {
    setResult(eval(value).toString() / 100)
    }
    const plusMinus = () => {
      try {
        setResult(-eval(value).toString())
      }
      catch(err) {
        setResult('Error')
      }
    }
  return (
    <div className="h-3/4 grid grid-cols-4 gap-1 mt-14 bg-slate-800 pt-3 pl-3">
    <button className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-teal-200 text-xl' onClick={clear}>AC</button>
    <button onClick={plusMinus} className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-teal-200'><BsPlusSlashMinus size={30} /></button>
     <button onClick={percentFunction} className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-teal-200'><BsPercent size={30}/></button>
     <button id='/' onClick={valueClick} className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-red-700 relative'><RiDivideLine id='/' size={30}/></button>
    <button onClick={valueClick} id='7'className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>7</button>
     <button onClick={valueClick} id='8' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>8</button>
     <button onClick={valueClick} id='9' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>9</button>
     <button onClick={valueClick} id='*' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-red-700'><RxCross1 id='*' size={24}/></button>
     <button onClick={valueClick} id='4' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>4</button>
     <button onClick={valueClick} id='5' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>5</button>
     <button onClick={valueClick} id='6' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>6</button>
     <button onClick={valueClick} id='-' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-red-700'><AiOutlineMinus id='-' size={30}/></button>
     <button onClick={valueClick} id='1' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>1</button>
     <button onClick={valueClick} id='2' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>2</button>
     <button  onClick={valueClick} id='3' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl' >3</button>
     <button onClick={valueClick} id='+' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-red-700'><BsPlus id='+' size={36}/></button>
     <button onClick={cFunction} className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white'><BsArrowCounterclockwise size={30}/></button>
     <button onClick={valueClick} id='0' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>0</button>
     <button onClick={valueClick} id='.' className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-white text-2xl'>.</button>
     <button onClick={calculate} className='flex rounded-lg w-20 h-20 justify-center items-center bg-slate-600 text-red-700'><TbEqual size={30}/></button>
   </div>
  )
}

export default CalcButtons