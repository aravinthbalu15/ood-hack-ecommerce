import { useCart } from "../../context/CartContext"
import CartItem from "./CartItem"
import EmptyState from "../common/EmptyState"
import Loader from "../common/Loader"
import { Link } from "react-router-dom"

export default function CartList() {
  const { items, loading, updateQty, remove, isPendingUpdate, isPendingRemove } = useCart()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Browse the latest apparel collections to get started."
        action={
          <Link
            to="/products"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-black transition"
          >
            Browse products
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onQtyChange={(qty) => updateQty(item.id, qty)}
          onRemove={() => remove(item.id)}
          loading={isPendingUpdate(item.id) || isPendingRemove(item.id)}
        />
      ))}
    </div>
  )
}
