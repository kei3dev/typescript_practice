import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Recoil hands-on</title>
        <meta name="description" content="Simple todo app with recoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
