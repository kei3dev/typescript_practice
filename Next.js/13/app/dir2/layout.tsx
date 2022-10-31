import Link from 'next/link'

export default function DirLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>dir2 layout</div>
      {children}
      <div>
        <Link href="/">Home</Link>
      </div>
    </section>
  )
}
