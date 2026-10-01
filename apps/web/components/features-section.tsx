import { HugeiconsIcon } from "@hugeicons/react"
import {
  CreditCardIcon,
  ShoppingBag01Icon,
  Calendar03Icon,
  Invoice01Icon,
} from "@hugeicons/core-free-icons"

const FEATURES = [
  {
    icon: CreditCardIcon,
    title: "Checkout & payments",
    desc: "Payment links, mobile money and cards — every channel settles into one balance.",
    img: "/auth/checkout.jpg",
  },
  {
    icon: ShoppingBag01Icon,
    title: "Orders & inventory",
    desc: "Products, stock movements and fulfillment tracked from cart to delivery.",
    img: "/auth/pos.jpg",
  },
  {
    icon: Calendar03Icon,
    title: "Bookings & services",
    desc: "Appointments with deposits, reminders and calendar aggregation built in.",
    img: "/auth/contactless.jpg",
  },
  {
    icon: Invoice01Icon,
    title: "Invoices & reports",
    desc: "Send invoices, reconcile payouts and read the ledger — no spreadsheets.",
    img: "/auth/bills.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The platform
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Run the whole business,
            <br />
            <span className="text-muted-foreground">not just the checkout.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-md">
                  <HugeiconsIcon icon={f.icon} strokeWidth={2} className="size-4" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
