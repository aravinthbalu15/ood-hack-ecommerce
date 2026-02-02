const products = Array.from({ length: 8 })

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-xl font-semibold mb-6">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((_, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl overflow-hidden hover:shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Corporate Shirt
              </h3>
              <p className="text-indigo-600 font-semibold mt-1">
                ₹1,299
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
