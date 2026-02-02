export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Shirt", "Blazer", "Trousers", "Tie"].map(item => (
            <div
              key={item}
              className="rounded-xl border bg-slate-50 p-4"
            >
              <div className="h-40 bg-slate-200 rounded mb-4"></div>
              <h3 className="font-medium">{item}</h3>
              <p className="text-sm text-slate-600">$120.00</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
