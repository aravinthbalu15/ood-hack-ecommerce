import { Package } from "lucide-react"

const statusStyles = {
  Delivered: "text-success",
  Processing: "text-info",
  Shipped: "text-secondary",
}

export default function OrderCard({ order }) {
  return (
    <div className="rounded-xl border border-default bg-surface p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <Package size={16} />
          Order {order.id}
        </div>
        <span className={`text-xs font-semibold ${statusStyles[order.status]}`}>
          {order.status}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-secondary">
        <span>{order.date}</span>
        <span className="text-base font-semibold text-primary">
          ${order.amount.toFixed(2)}
        </span>
      </div>
      <button className="mt-4 rounded-lg border border-default px-4 py-2 text-sm text-primary hover:bg-slate-50">
        View details
      </button>
    </div>
  )
}
