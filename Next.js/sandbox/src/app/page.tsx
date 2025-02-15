export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="animate-fade-in text-balance bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text font-bold text-6xl text-transparent">
          sandbox
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
            <div className="mb-4 aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-500 to-violet-500" />
            <h2 className="font-semibold text-2xl text-wrap-balance">
              card one
            </h2>
            <p className="mt-2 text-pretty text-slate-300">
              card one description
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
            <div className="mb-4 aspect-[4/3] rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <h2 className="font-semibold text-2xl text-wrap-balance">
              card two
            </h2>
            <p className="mt-2 text-pretty text-slate-300">
              card two description
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
            <div className="mb-4 aspect-[4/3] rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500" />
            <h2 className="font-semibold text-2xl text-wrap-balance">
              card three
            </h2>
            <p className="mt-2 text-pretty text-slate-300">
              card three description
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
