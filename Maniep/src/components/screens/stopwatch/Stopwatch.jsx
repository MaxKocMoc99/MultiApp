import {useState} from 'react'
import StartButton from './StartButton'
import ResetButton from './ResetButton'
import StopButton from './StopButton'
const Stopwatch = () => {
  let [miliSeconds, setMiliSeconds] = useState('00')
  let [seconds, setSeconds] = useState('00')
  let [minutes, setMinutes] = useState('00')
  let [intervl, setIntervl] = useState()
  const time = () => {
    clearInterval(intervl)
    setIntervl(setInterval(startTimer, 10))
  }
  const startTimer = () => {
   miliSeconds++
    if (miliSeconds <= 9) {
      setMiliSeconds('0' + miliSeconds)
    } 
    if (miliSeconds > 9) {
      setMiliSeconds(miliSeconds)
    }
    if (miliSeconds > 99) {
      seconds++
      setSeconds('0' + seconds)
      miliSeconds = 0
      setMiliSeconds('0' + 0)
    }
    if (seconds > 9) {
      setSeconds(seconds)
    }
    if (seconds > 59) {
      seconds = 0
      setSeconds('0' + 0)
      minutes++
      setMinutes('0' + minutes)
    }
    if (minutes > 9) {
      setMinutes(minutes)
    }
  }
  const stopTimer = () => {
    setIntervl(clearInterval(intervl))
  }
  const resetTimer = () => {
    setIntervl(clearInterval(intervl))
    miliSeconds = '00'
    seconds = '00'
    minutes = '00'
    setMiliSeconds(miliSeconds)
    setSeconds(seconds)
    setMinutes(minutes)
  }
  return (
    <div className="h-screen bg-black">
      <div className="text-white mx-auto w-64 text-6xl pt-60 tracking-wide">{minutes}:{seconds},{miliSeconds}</div>
      <div className="flex justify-between mx-auto w-72 mt-32">
        <ResetButton resetTimer={resetTimer} />
        <StopButton stopTmer={stopTimer}/>
        <StartButton time={time}/>
      </div>
    </div>
  )
}

export default Stopwatch