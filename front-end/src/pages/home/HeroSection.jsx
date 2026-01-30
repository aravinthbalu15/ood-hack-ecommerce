export default function HeroSection() {
  return (
    <section className="relative bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <span className="inline-block mb-4 rounded-full bg-slate-700 px-3 py-1 text-xs">
          NEW SEASON ARRIVALS
        </span>

        <h1 className="text-5xl font-bold max-w-2xl">
          Redefining <span className="text-indigo-400">Corporate</span> Elegance.
        </h1>

        <p className="mt-6 max-w-xl text-slate-300">
          Premium enterprise-grade apparel solutions for the modern professional.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 text-slate-900 font-medium">
            Explore Shop →
          </button>
          <button className="rounded-lg border border-white/30 px-6 py-3">
            View Lookbook
          </button>
        </div>
      </div>
    </section>
  )
}
