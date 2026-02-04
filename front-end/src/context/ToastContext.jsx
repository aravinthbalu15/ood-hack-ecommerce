import { createContext, useContext, useCallback, useState } from "react"

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const pushToast = useCallback((toast) => {
    const id = Date.now().toString()
    const next = { id, ...toast }
    setToasts((prev) => [...prev, next])
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id))
    }, 3000)
  }, [])

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, pushToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
