import { Link } from "react-router-dom"

export default function CartEmpty() {
  return (
    <div className="text-center py-24">
      <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      <p className="mt-2 text-slate-500">
        Looks like you haven’t added anything yet
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
