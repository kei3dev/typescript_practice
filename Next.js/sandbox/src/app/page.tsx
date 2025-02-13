export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-6xl font-bold text-balance bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent animate-fade-in">
          sandbox
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 mb-4" />
            <h2 className="text-2xl font-semibold text-wrap-balance">
              card one
            </h2>
            <p className="mt-2 text-slate-300 text-pretty">
              card one description
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-4" />
            <h2 className="text-2xl font-semibold text-wrap-balance">
              card two
            </h2>
            <p className="mt-2 text-slate-300 text-pretty">
              card two description
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 mb-4" />
            <h2 className="text-2xl font-semibold text-wrap-balance">
              card three
            </h2>
            <p className="mt-2 text-slate-300 text-pretty">
              card three description
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
