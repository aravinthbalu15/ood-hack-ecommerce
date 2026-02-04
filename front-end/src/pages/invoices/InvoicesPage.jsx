import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { downloadInvoice, getInvoices } from "../../api/invoices.api"
import InvoiceCard from "../../components/invoices/InvoiceCard"
import Loader from "../../components/common/Loader"
import EmptyState from "../../components/common/EmptyState"
import { useToast } from "../../context/ToastContext"

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)
  const { pushToast } = useToast()

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      const data = await getInvoices()
      if (mounted) {
        setInvoices(data)
        setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  const handleDownload = async (id) => {
    const url = await downloadInvoice(id)
    pushToast({
      type: "success",
      title: "Invoice ready",
      message: `Download link: ${url}`,
    })
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">Invoices</h1>
        <div className="flex gap-3 text-sm">
          <Link to="/orders" className="text-secondary hover:text-primary">
            My Orders
          </Link>
          <Link to="/invoices" className="text-primary font-semibold">
            Invoices
          </Link>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader />
          </div>
        ) : invoices.length === 0 ? (
          <EmptyState
            title="No invoices available"
            description="Invoices will appear here once payments are completed."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {invoices.map((invoice) => (
              <InvoiceCard
                key={invoice.id}
                invoice={invoice}
                onDownload={handleDownload}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
