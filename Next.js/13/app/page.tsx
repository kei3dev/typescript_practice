import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Link href="/dir1">dir1</Link>
      </div>
      <div>
        <Link href="/dir2">dir2</Link>
      </div>
    </>
  )
}
