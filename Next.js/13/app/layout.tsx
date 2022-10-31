'use client'

import { useState } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <html>
      <head>
        <title>Next.js13 hands-on</title>
      </head>
      <body>
        <header>header</header>
        <div>{children}</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          +
        </button>
      </body>
    </html>
  )
}
