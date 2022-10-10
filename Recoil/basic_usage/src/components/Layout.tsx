import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {children}
    </main>
  )
}

export default Layout
