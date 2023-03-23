import { useState } from 'react'
import CalcDisplay from './CalcDisplay'
import CalcButtons from './CalcButtons'
const Calc = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  return ( 
    <div className=" w-96 mx-auto mt-20 rounded-lg h-screen">
      <div className="border-black bg-black border w-6/6 h-5/6 mx-auto mt-2 rounded-md">
        <CalcDisplay value={value} result={result} />
        <CalcButtons value={value} setValue={setValue} setResult={setResult}/>
      </div>
    </div>
  )
}

export default Calc