import { Heart, Loader2, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isAdding = false,
  isWishlistLoading = false,
  inCart = false,
  disabled = false,
}) {
  const priceText = `$${product.price.toFixed(2)}`

  return (
    <div className="group rounded-xl border border-default bg-surface overflow-hidden transition hover:shadow-card">
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>
        {product.discountPercent > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2 py-1 text-xs font-semibold text-white">
            {product.discountPercent}% OFF
          </span>
        )}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute right-3 top-3 rounded-full bg-white/90 p-2 text-secondary hover:text-primary ${
            isWishlisted ? "text-primary" : ""
          }`}
          aria-label="Toggle wishlist"
          disabled={isWishlistLoading}
        >
          {isWishlistLoading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Heart size={18} />
          )}
        </button>
      </div>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-medium text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-lg font-semibold text-primary">{priceText}</p>
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={disabled || isAdding}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {isAdding ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ShoppingBag size={16} />
          )}
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
        {disabled && (
          <p className="mt-2 text-xs text-error">Out of stock</p>
        )}
      </div>
    </div>
  )
}
