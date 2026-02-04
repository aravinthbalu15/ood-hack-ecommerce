export default function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-2 text-sm text-secondary">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-default text-secondary"
        {...props}
      />
      {label}
    </label>
  )
}
