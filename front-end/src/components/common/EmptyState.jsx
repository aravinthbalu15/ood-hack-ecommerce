import { Package } from "lucide-react"

export default function EmptyState({ title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-default bg-surface px-6 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-secondary">
        <Package size={28} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-secondary">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
