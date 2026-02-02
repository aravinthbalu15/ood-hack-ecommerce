export default function HeroSection() {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Fashion that fits <br /> your business style
          </h1>
          <p className="mt-4 text-indigo-100">
            Premium apparel for modern professionals
          </p>
          <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50">
            Shop now
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
