const CalcDisplay = ({value, result}) => {
  return (
    <div className="text-white bgblack- h-20 rounded-xl pt-5 flex-col items-center justify-center">   
    <p className='text-white text-xl text-right'>{value}</p>
    <h1 className='text-white mt-4 text-5xl text-right'>{result}</h1>
  </div>
  )
}

export default CalcDisplay