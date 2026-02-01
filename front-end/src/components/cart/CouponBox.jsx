export default function CouponBox() {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium">Discount Code</h3>
      <div className="flex gap-2">
        <input
          placeholder="Enter code"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="rounded-lg bg-slate-900 px-4 text-sm text-white hover:bg-slate-800">
          Apply
        </button>
      </div>
    </div>
  )
}
