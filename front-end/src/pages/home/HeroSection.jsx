import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-white to-slate-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Modern Minimal Fashion
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-primary leading-tight">
            Style That Fits Your Life
          </h1>
          <p className="mt-4 text-sm text-secondary max-w-md">
            Premium apparel curated for professionals and teams. Build a
            wardrobe that feels effortless, refined, and ready for every day.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/products"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="rounded-lg border border-default px-6 py-3 text-sm font-semibold text-primary hover:bg-slate-100 transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Hero apparel"
            className="h-[360px] w-full rounded-2xl object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  )
}
