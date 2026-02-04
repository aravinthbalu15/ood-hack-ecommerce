export default function Toast({ type = "info", title, message, onClose }) {
  const styles = {
    success: "border-l-4 border-emerald-600",
    error: "border-l-4 border-red-600",
    info: "border-l-4 border-blue-600",
    warning: "border-l-4 border-amber-500",
  }

  return (
    <div
      className={`w-full rounded-lg bg-surface p-4 shadow-card ${styles[type]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-primary">{title}</p>
          {message && (
            <p className="mt-1 text-xs text-secondary">{message}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-xs text-secondary hover:text-primary"
        >
          Close
        </button>
      </div>
    </div>
  )
}
