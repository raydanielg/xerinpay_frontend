import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  ChartBarLineIcon,
  ShieldCheckIcon,
  Notification01Icon,
} from "@hugeicons/core-free-icons"

const POINTS = [
  {
    icon: ChartBarLineIcon,
    title: "Live ledger",
    desc: "Every payment lands in a double-entry ledger — balances you can trust.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built-in controls",
    desc: "PIN, two-factor, device management and audit events on every action.",
  },
  {
    icon: Notification01Icon,
    title: "Smart alerts",
    desc: "Payments, orders and security events reach your team instantly.",
  },
]

export function InsightsSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border bg-muted/40 p-6 md:grid-cols-2 md:p-12">
        {/* image card */}
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/auth/transfer.jpg"
            alt="Money transfer"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
          {/* floating stat */}
          <div className="absolute -bottom-5 -right-3 rotate-2 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/5 md:-right-6">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              Payouts
            </p>
            <p className="mt-0.5 text-xl font-bold text-black">TZS 12.8M</p>
            <p className="text-[11px] font-medium text-emerald-600">
              sent this month
            </p>
          </div>
        </div>

        {/* copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Money movement, made clear
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Know exactly where every shilling sits.
          </h2>
          <div className="mt-8 space-y-5">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-foreground shadow-sm ring-1 ring-black/5">
                  <HugeiconsIcon icon={p.icon} strokeWidth={2} className="size-4" />
                </span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-600">
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              strokeWidth={2}
              className="size-4"
            />
            Settlement reports reconciled daily
          </div>
        </div>
      </div>
    </section>
  )
}
