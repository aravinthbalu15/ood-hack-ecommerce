import { TicketPercent } from "lucide-react"
import { useState } from "react"

export default function CouponInput({ state, onApply }) {
  const [code, setCode] = useState("")

  const statusMessage = {
    valid: "Coupon applied successfully.",
    invalid: "Invalid coupon code.",
    expired: "This coupon has expired.",
    used: "This coupon was already used.",
    loading: "Validating coupon...",
  }

  const statusColor = {
    valid: "text-success",
    invalid: "text-error",
    expired: "text-error",
    used: "text-error",
    loading: "text-secondary",
  }

  return (
    <div className="rounded-xl border border-default bg-surface p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
        <TicketPercent size={18} />
        Apply Coupon
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Enter coupon code"
          className="w-full rounded-md border border-default px-3 py-2 text-sm focus-ring"
        />
        <button
          onClick={() => onApply(code)}
          disabled={!code || state.status === "loading"}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          Apply
        </button>
      </div>
      {state.status !== "idle" && (
        <p className={`mt-3 text-xs ${statusColor[state.status]}`}>
          {statusMessage[state.status]}
        </p>
      )}
    </div>
  )
}
