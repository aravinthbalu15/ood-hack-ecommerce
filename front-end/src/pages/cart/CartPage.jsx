import { useNavigate } from "react-router-dom"
import CartList from "../../components/cart/CartList"
import OrderSummary from "../../components/cart/OrderSummary"
import CouponInput from "../../components/cart/CouponInput"
import { useCart } from "../../context/CartContext"

export default function CartPage() {
  const navigate = useNavigate()
  const { summary, couponState, apply } = useCart()

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-primary">Shopping Cart</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <CartList />
          <CouponInput state={couponState} onApply={apply} />
        </div>
        <OrderSummary summary={summary} onCheckout={() => navigate("/checkout")} />
      </div>
    </div>
  )
}
