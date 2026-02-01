import { Link } from "react-router-dom"
import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { useWishlist } from "../../context/WishlistContext"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Heart size={48} className="text-slate-300" />
        <h2 className="mt-4 text-xl font-semibold text-slate-800">
          Your wishlist is empty
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Save items you love for later
        </p>
        <Link
          to="/shop"
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-slate-900">
        My Wishlist
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full rounded-lg object-cover"
            />

            <h3 className="mt-4 text-sm font-medium text-slate-800">
              {product.title}
            </h3>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              ₹{product.price}
            </p>

            <div className="mt-4 flex gap-2">
              {/* MOVE TO CART */}
              <button
                onClick={() => moveToCart(product)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
              >
                <ShoppingCart size={16} />
                Move to Cart
              </button>

              {/* REMOVE */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="rounded-lg border px-3 py-2 hover:bg-slate-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
