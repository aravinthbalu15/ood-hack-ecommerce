export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="w-8 h-8 rounded bg-indigo-600 text-white flex items-center justify-center">
            A
          </span>
          ApparelDesk
        </div>

        <div className="text-sm text-slate-600 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          System Status: Operational
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-xs text-slate-500 text-center py-6">
        © 2024 ApparelDesk ERP Systems Inc. All rights reserved.
      </footer>
    </div>
  )
}