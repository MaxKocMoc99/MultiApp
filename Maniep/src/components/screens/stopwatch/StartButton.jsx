const StartButton = ({time}) => {
  return (
    <button onClick={() => time()} className="rounded-full border bg-green-900 text-green-400 border-green-900 w-20 h-20 flex justify-center items-center">Старт</button>
  )
}

export default StartButton