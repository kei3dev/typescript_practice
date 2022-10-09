import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return <main>{children}</main>
}

export default Layout
