const StopButton = ({stopTmer}) => {
  return (
    <button onClick={() => stopTmer()} className="rounded-full border bg-red-600 text-red-400 border-red-600 w-20 h-20 flex justify-center items-center">Стоп</button>
  )
}

export default StopButton