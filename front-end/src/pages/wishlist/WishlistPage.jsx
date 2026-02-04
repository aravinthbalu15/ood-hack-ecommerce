import { Link } from "react-router-dom"
import { useWishlist } from "../../context/WishlistContext"
import WishlistItemContainer from "../../components/wishlist/WishlistItemContainer"
import Loader from "../../components/common/Loader"
import EmptyState from "../../components/common/EmptyState"

export default function WishlistPage() {
  const { items, loading } = useWishlist()

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-primary">Wishlist</h1>
      <div className="mt-6">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader />
          </div>
        ) : items.length === 0 ? (
          <EmptyState
            title="Your wishlist is empty"
            description="Save items you love and come back later."
            action={
              <Link
                to="/products"
                className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-black transition"
              >
                Browse products
              </Link>
            }
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <WishlistItemContainer key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
