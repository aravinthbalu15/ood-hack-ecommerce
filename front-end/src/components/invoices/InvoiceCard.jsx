import { Download, FileText } from "lucide-react"

const statusStyles = {
  Paid: "text-success",
  Pending: "text-secondary",
}

export default function InvoiceCard({ invoice, onDownload }) {
  return (
    <div className="rounded-xl border border-default bg-surface p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <FileText size={16} />
          Invoice {invoice.id}
        </div>
        <span className={`text-xs font-semibold ${statusStyles[invoice.status]}`}>
          {invoice.status}
        </span>
      </div>
      <div className="mt-3 text-sm text-secondary">
        <p>Order: {invoice.orderId}</p>
        <p>Date: {invoice.date}</p>
      </div>
      <div className="mt-3 text-base font-semibold text-primary">
        ${invoice.amount.toFixed(2)}
      </div>
      <button
        onClick={() => onDownload(invoice.id)}
        className="mt-4 flex items-center gap-2 rounded-lg border border-default px-4 py-2 text-sm text-primary hover:bg-slate-50"
      >
        <Download size={16} />
        Download PDF
      </button>
    </div>
  )
}
