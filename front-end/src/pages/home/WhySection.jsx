import { ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react"

const features = [
  {
    title: "Quality Fabric",
    description: "Premium materials curated for comfort and durability.",
    icon: Sparkles,
  },
  {
    title: "Easy Returns",
    description: "Simple, no-hassle return flow with fast processing.",
    icon: RotateCcw,
  },
  {
    title: "Secure Payments",
    description: "Trusted payment providers with encrypted checkout.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Reliable shipping with real-time tracking updates.",
    icon: Truck,
  },
]

export default function WhySection() {
  return (
    <section className="bg-surface border-t border-default">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-xl font-medium text-primary">Why ApparelDesk</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-default bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-secondary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-medium text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-secondary">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
