export default function CategorySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold">Shop by Category</h2>
        <p className="text-slate-600 mt-1">
          Curated collections for every workspace.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Men’s Apparel", "Women’s Collection", "Accessories"].map(cat => (
            <div
              key={cat}
              className="h-64 rounded-xl bg-slate-200 flex items-end p-6 font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
