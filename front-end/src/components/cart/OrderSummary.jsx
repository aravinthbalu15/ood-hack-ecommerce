export default function OrderSummary({ summary, onCheckout }) {
  return (
    <div className="sticky top-24 rounded-xl border border-default bg-surface p-6">
      <h3 className="text-base font-semibold text-primary">Order Summary</h3>
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
        onClick={onCheckout}
        className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-black"
      >
        Checkout
      </button>
    </div>
  )
}
