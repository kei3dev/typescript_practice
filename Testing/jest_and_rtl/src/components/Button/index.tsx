import { FC, useState } from 'react'

const Button: FC = () => {
  const [isClick, setIsClick] = useState(false)

  return (
    <button
      style={{ backgroundColor: isClick ? 'blue' : 'red' }}
      onClick={() => setIsClick((prevBool) => !prevBool)}
    >
      {isClick ? 'Change to red' : 'Change to blue'}
    </button>
  )
}

export default Button
