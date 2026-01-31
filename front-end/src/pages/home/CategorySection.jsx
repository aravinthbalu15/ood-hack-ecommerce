const categories = ["Men", "Women", "Accessories", "Corporate Wear"]

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div
            key={cat}
            className="bg-white border rounded-xl p-6 text-center hover:shadow-md cursor-pointer"
          >
            <h3 className="font-medium">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
