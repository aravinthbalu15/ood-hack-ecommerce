import { Loader2 } from "lucide-react"

export default function Loader({ size = 24 }) {
  return (
    <div className="flex items-center justify-center text-secondary">
      <Loader2 size={size} className="animate-spin" />
    </div>
  )
}
