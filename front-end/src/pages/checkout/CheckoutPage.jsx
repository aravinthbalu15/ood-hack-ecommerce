import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { useCart } from "../../context/CartContext"

export default function CheckoutPage() {
  const { summary } = useCart()
  const [paymentState, setPaymentState] = useState("idle")

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-primary">Checkout</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-default bg-surface p-6">
            <h2 className="text-base font-semibold text-primary">
              Address Selection
            </h2>
            <div className="mt-4 space-y-3 text-sm text-secondary">
              <label className="flex items-start gap-3 rounded-lg border border-default p-4">
                <input type="radio" name="address" defaultChecked />
                <div>
                  <p className="font-medium text-primary">Office HQ</p>
                  <p>12/A, Aurora Business Park, Mumbai</p>
                </div>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-default p-4">
                <input type="radio" name="address" />
                <div>
                  <p className="font-medium text-primary">Home</p>
                  <p>54, Lotus Residency, Pune</p>
                </div>
              </label>
              <button className="mt-2 rounded-lg border border-default px-4 py-2 text-sm text-primary hover:bg-slate-50">
                Add new address
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-default bg-surface p-6">
            <h2 className="text-base font-semibold text-primary">
              Payment Method
            </h2>
            <div className="mt-4 space-y-3 text-sm text-secondary">
              <label className="flex items-center gap-3 rounded-lg border border-default p-4">
                <input type="radio" name="payment" defaultChecked />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-default p-4">
                <input type="radio" name="payment" />
                <span>UPI</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-default p-4">
                <input type="radio" name="payment" />
                <span>Net Banking</span>
              </label>
              <p className="text-xs text-secondary">
                Default payment term: Immediate Payment
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-default bg-surface p-6">
            <h2 className="text-base font-semibold text-primary">
              Order Summary
            </h2>
            <div className="mt-4 space-y-2 text-sm text-secondary">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-primary">${summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-primary">-${summary.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-primary">${summary.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-default pt-3 flex justify-between text-base font-semibold text-primary">
                <span>Total</span>
                <span>${summary.total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setPaymentState("success")}
              className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Pay Now
            </button>
            <button
              onClick={() => setPaymentState("failed")}
              className="mt-3 w-full rounded-lg border border-default py-3 text-sm text-primary hover:bg-slate-50"
            >
              Simulate Failure
            </button>
          </div>

          {paymentState === "success" && (
            <div className="rounded-xl border border-default bg-surface p-4 text-sm text-success flex items-center gap-2">
              <CheckCircle size={18} />
              Payment successful. Order confirmed.
            </div>
          )}
          {paymentState === "failed" && (
            <div className="rounded-xl border border-default bg-surface p-4 text-sm text-error flex items-center gap-2">
              <XCircle size={18} />
              Payment failed. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
