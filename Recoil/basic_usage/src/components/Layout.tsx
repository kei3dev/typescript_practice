import Head from 'next/head'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recoil hands-on</title>
        <meta name="description" content="Simple todo app with recoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default Layout
