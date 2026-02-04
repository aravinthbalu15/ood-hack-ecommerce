import { Loader2, ShoppingBag, Trash2 } from "lucide-react"

export default function WishlistItem({
  item,
  onMoveToCart,
  onRemove,
  loading = false,
}) {
  return (
    <div className="rounded-xl border border-default bg-surface p-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-44 w-full rounded-lg object-cover"
      />
      <h3 className="mt-4 text-base font-medium text-primary">{item.name}</h3>
      <p className="mt-1 text-lg font-semibold text-primary">
        ${item.price.toFixed(2)}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={onMoveToCart}
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-black transition disabled:opacity-60"
        >
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ShoppingBag size={16} />
          )}
          Move to Cart
        </button>
        <button
          onClick={onRemove}
          disabled={loading}
          className="rounded-lg border border-default px-3 py-2 text-secondary hover:text-primary disabled:opacity-60"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}
