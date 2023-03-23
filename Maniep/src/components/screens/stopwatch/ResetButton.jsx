const ResetButton = ({resetTimer}) => {
  return (
    <button onClick={() => resetTimer()} className="rounded-full border bg-gray-600 text-gray-400 border-gray-600 w-20 h-20 flex justify-center items-center">Сброс</button>
  )
}

export default ResetButton