import AppLayout from "../../components/layout/AppLayout"
import CartList from "../../components/cart/CartList"
import OrderSummary from "../../components/cart/OrderSummary"

export default function CartPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartList />
          </div>
          <OrderSummary />
        </div>
      </div>
    </AppLayout>
  )
}
