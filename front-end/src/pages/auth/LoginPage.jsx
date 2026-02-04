import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { useToast } from "../../context/ToastContext"
import { clearPendingAction, getPendingAction } from "../../utils/pendingAction"

export default function LoginPage() {
  const { login } = useAuth()
  const { add } = useCart()
  const { add: addWishlist, remove } = useWishlist()
  const { pushToast } = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.email || !form.password) {
      setError("Please enter your email and password.")
      return
    }
    setError("")
    setLoading(true)
    try {
      await login(form)
      const pending = getPendingAction()
      if (pending) {
        if (pending.type === "cart") {
          await add(pending.productId, pending.qty || 1)
          pushToast({
            type: "success",
            title: "Added to cart",
            message: "Item has been added to your cart.",
          })
        }
        if (pending.type === "wishlist") {
          await addWishlist(pending.productId)
          pushToast({
            type: "success",
            title: "Added to wishlist",
          })
        }
        if (pending.type === "moveToCart") {
          await add(pending.productId, 1)
          await remove(pending.productId)
          pushToast({
            type: "success",
            title: "Moved to cart",
            message: "Item added to your cart.",
          })
        }
        clearPendingAction()
        navigate(pending.redirect || "/")
        return
      }
      pushToast({
        type: "success",
        title: "Login successful",
        message: "Welcome back to ApparelDesk.",
      })
      navigate("/")
    } catch (err) {
      setError(err.message || "Unable to login.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-2xl border border-default bg-surface p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-primary">
          Sign in to ApparelDesk
        </h1>
        <p className="mt-2 text-sm text-secondary">
          Enter your credentials to continue.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-secondary">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="mt-2 w-full rounded-md border border-default px-3 py-2 text-sm focus-ring"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-secondary">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, password: event.target.value }))
              }
              className="mt-2 w-full rounded-md border border-default px-3 py-2 text-sm focus-ring"
            />
          </div>
          {error && <p className="text-xs text-error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between text-sm text-secondary">
          <Link to="/forgot-password" className="hover:text-primary">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-primary font-semibold">
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}
