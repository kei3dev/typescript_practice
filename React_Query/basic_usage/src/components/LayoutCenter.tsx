import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const LayoutCenter: FC<Props> = ({ children }) => {
  return <div className="flex min-h-screen flex-col items-center justify-center">{children}</div>
}

export default LayoutCenter
