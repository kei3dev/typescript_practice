export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next.js13 hands-on</title>
      </head>
      <body>
        <header>header</header>
        {children}
      </body>
    </html>
  )
}
