import { useCart } from "../../context/CartContext"

export default function OrderSummary() {
  const { subtotal, tax, total } = useCart()

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>₹ {tax}</span>
        </div>
        <hr />
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700">
        Checkout
      </button>
    </div>
  )
}
