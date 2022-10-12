import { FC, ReactNode } from 'react'

type Props = {
  /** Provide a text for the button*/
  children: ReactNode

  /** Which variant look would you like use */
  variant: 'primary' | 'secondary'

  onClick?: () => void
}

/** This is Button component. */
export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-full py-2 px-4 font-bold text-white transition-colors ${
        variant === 'primary'
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-pink-600 hover:bg-pink-700'
      }`}
    >
      {children}
    </button>
  )
}
