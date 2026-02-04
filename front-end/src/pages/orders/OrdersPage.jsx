import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getOrders } from "../../api/orders.api"
import OrderCard from "../../components/orders/OrderCard"
import Loader from "../../components/common/Loader"
import EmptyState from "../../components/common/EmptyState"

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      const data = await getOrders()
      if (mounted) {
        setOrders(data)
        setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">Orders</h1>
        <div className="flex gap-3 text-sm">
          <Link to="/orders" className="text-primary font-semibold">
            My Orders
          </Link>
          <Link to="/invoices" className="text-secondary hover:text-primary">
            Invoices
          </Link>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader />
          </div>
        ) : orders.length === 0 ? (
          <EmptyState
            title="No orders yet"
            description="Your orders will appear here once placed."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
