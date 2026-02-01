import { useCart } from "../../context/CartContext"

export default function CartItem({ item }) {
  const { removeFromCart, updateQty } = useCart()

  return (
    <div className="flex gap-4 rounded-xl border bg-white p-4">
      <img
        src={item.image}
        alt={item.title}
        className="h-24 w-24 rounded object-cover"
      />

      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-slate-500">₹ {item.price}</p>

        <div className="mt-3 flex items-center gap-3">
          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>

          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-sm text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
