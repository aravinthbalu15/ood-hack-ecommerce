export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-secondary">
          {label}
        </label>
      )}
      <input
        type={type}
        className="w-full rounded-md border border-default px-3 py-2 text-sm
                   focus-ring"
        {...props}
      />
    </div>
  )
}
