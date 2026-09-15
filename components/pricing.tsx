const tiers = [
  {
    name: "Portrait",
    price: "$200",
    description: "A single session for individual or small-group portraits.",
    features: [
      "1–2 hour session",
      "One location",
      "10 edited photos",
      "Online gallery",
    ],
  },
  {
    name: "Wedding",
    price: "$1,500",
    description: "Full-day coverage from preparation to reception.",
    features: [
      "8 hours of coverage",
      "Two photographers",
      "200+ edited photos",
      "Online gallery + print release",
    ],
  },
  {
    name: "Event",
    price: "$800",
    description: "Half-day coverage for corporate or private events.",
    features: [
      "4 hours of coverage",
      "50+ edited photos",
      "Quick turnaround",
      "Online gallery",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Pricing
        </h2>
        <p className="mt-3 text-muted-foreground">
          Simple packages built around the way I work.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col border px-6 py-8"
            >
              <h3 className="font-serif text-xl">{tier.name}</h3>
              <p className="mt-1 text-3xl font-light tracking-tight">
                {tier.price}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-muted-foreground">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}