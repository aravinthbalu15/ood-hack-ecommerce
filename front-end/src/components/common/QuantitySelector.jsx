import { Minus, Plus } from "lucide-react"

export default function QuantitySelector({ value, onChange, disabled = false }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-default px-3 py-2">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={disabled}
        className="text-secondary hover:text-primary disabled:opacity-50"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="min-w-[24px] text-center text-sm text-primary">
        {value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        disabled={disabled}
        className="text-secondary hover:text-primary disabled:opacity-50"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
