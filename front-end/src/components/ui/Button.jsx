export default function Button({ children, ...props }) {
  return (
    <button
      className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold
                 text-white hover:bg-indigo-700 transition"
      {...props}
    >
      {children}
    </button>
  )
}