export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold">ApparelDesk</h3>
          <p className="mt-2 text-sm">
            Enterprise-grade apparel solutions.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help</li>
            <li>Returns</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-slate-800">
        © {new Date().getFullYear()} ApparelDesk
      </div>
    </footer>
  )
}
