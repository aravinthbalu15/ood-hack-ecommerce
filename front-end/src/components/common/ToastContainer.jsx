import { useToast } from "../../context/ToastContext"
import Toast from "./Toast"

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-80 flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}
