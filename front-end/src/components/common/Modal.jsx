import { X } from "lucide-react"

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl bg-surface p-6 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-secondary hover:text-primary"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
