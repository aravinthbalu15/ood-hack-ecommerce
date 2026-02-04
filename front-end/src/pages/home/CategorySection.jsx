import { Link } from "react-router-dom"

const categories = [
  {
    label: "Men",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    href: "/products?gender=Men",
  },
  {
    label: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    href: "/products?gender=Women",
  },
  {
    label: "Kids",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    href: "/products?gender=Kids",
  },
]

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-primary">
          Shop by Category
        </h2>
        <Link to="/products" className="text-sm text-secondary hover:text-primary">
          View all
        </Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {categories.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="group relative overflow-hidden rounded-2xl border border-default bg-surface"
          >
            <img
              src={item.image}
              alt={item.label}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-base font-semibold">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
