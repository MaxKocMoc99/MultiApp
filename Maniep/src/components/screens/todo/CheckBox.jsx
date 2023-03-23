import { GoCheck } from 'react-icons/go'
import cn from 'classnames'
const CheckBox = ({isEnded}) => {
    return (
        <div className={cn('border rounded-full border-gray-700 w-7 h-7 flex items-center justify-center bg-gray-500',
            {'bg-gray-500': isEnded})}>
         {isEnded &&  <GoCheck className='text-white ' />}
      </div>
  )
}

export default CheckBox