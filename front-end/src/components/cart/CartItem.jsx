import { Loader2, Trash2 } from "lucide-react"
import QuantitySelector from "../common/QuantitySelector"

export default function CartItem({ item, onQtyChange, onRemove, loading = false }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-default bg-surface p-4 sm:flex-row sm:items-center">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-base font-medium text-primary">{item.name}</h3>
        <p className="mt-1 text-sm text-secondary">${item.price.toFixed(2)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <QuantitySelector
            value={item.qty}
            onChange={onQtyChange}
            disabled={loading}
          />
          <button
            onClick={onRemove}
            disabled={loading}
            className="flex items-center gap-2 text-sm text-secondary hover:text-primary disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Trash2 size={16} />
            )}
            {loading ? "Updating" : "Remove"}
          </button>
        </div>
      </div>
      <div className="text-right text-base font-semibold text-primary">
        ${(item.price * item.qty).toFixed(2)}
      </div>
    </div>
  )
}
