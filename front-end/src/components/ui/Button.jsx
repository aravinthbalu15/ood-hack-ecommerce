export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-primary text-white hover:bg-black",
    secondary:
      "bg-surface border border-default text-primary hover:bg-slate-100",
    cta: "bg-accent text-white hover:bg-orange-600",
  }

  return (
    <button
      className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}
