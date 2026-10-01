import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SmartPhone01Icon,
  CreditCardIcon,
  Wallet01Icon,
  ShoppingBag01Icon,
  Calendar03Icon,
  Invoice01Icon,
  ChartBarLineIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

const SOURCES = [
  { icon: SmartPhone01Icon, label: "Mobile money", sub: "M-Pesa · Airtel · Tigo" },
  { icon: CreditCardIcon, label: "Cards", sub: "Visa · Mastercard" },
  { icon: Wallet01Icon, label: "Payment links", sub: "Share & get paid" },
]

const OUTPUTS = [
  { icon: ShoppingBag01Icon, label: "Orders", sub: "Tracked end-to-end" },
  { icon: Calendar03Icon, label: "Bookings", sub: "Deposits & balance" },
  { icon: Invoice01Icon, label: "Invoices", sub: "Sent & reconciled" },
  { icon: ChartBarLineIcon, label: "Reports", sub: "Real-time ledger" },
]

function Row({
  icon,
  label,
  sub,
}: {
  icon: typeof SmartPhone01Icon
  label: string
  sub: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm">
      <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
        <HugeiconsIcon icon={icon} strokeWidth={2} className="size-4" />
      </span>
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  )
}

export function GatewaySection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Payment infrastructure
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            One gateway.{" "}
            <span className="text-muted-foreground">Every payment.</span>
          </h2>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            Accept, process and track payments through one simple
            infrastructure built for modern businesses.
          </p>
        </div>

        {/* flow visual */}
        <div className="relative mx-auto mt-14 grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          {/* sources */}
          <div className="flex flex-col gap-3">
            {SOURCES.map((s) => (
              <Row key={s.label} {...s} />
            ))}
          </div>

          {/* gateway core */}
          <div className="relative flex flex-col items-center">
            {/* connecting rails */}
            <div className="absolute inset-y-8 left-0 hidden w-10 md:block">
              <div className="absolute inset-y-0 left-0 w-px bg-border" />
              {[15, 50, 85].map((t) => (
                <span
                  key={t}
                  className="absolute -left-[3px] size-[7px] rounded-full bg-border"
                  style={{ top: `${t}%` }}
                />
              ))}
            </div>
            <div className="absolute inset-y-8 right-0 hidden w-10 md:block">
              <div className="absolute inset-y-0 right-0 w-px bg-border" />
              {[12, 38, 62, 88].map((t) => (
                <span
                  key={t}
                  className="absolute -right-[3px] size-[7px] rounded-full bg-border"
                  style={{ top: `${t}%` }}
                />
              ))}
            </div>

            <div className="relative z-10 flex w-56 flex-col items-center rounded-2xl border bg-foreground p-6 text-background shadow-xl">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-lg bg-white object-contain p-1"
              />
              <p className="mt-3 text-sm font-bold tracking-tight">
                XerinPay Gateway
              </p>
              <p className="mt-1 text-center text-[11px] text-background/60">
                Routing · ledger · settlement
              </p>
              <div className="mt-4 w-full space-y-1.5">
                {["Verify", "Authorize", "Settle"].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-lg bg-background/10 px-3 py-1.5 text-[11px] font-medium"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      strokeWidth={2}
                      className="size-3.5 text-emerald-400"
                    />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* outputs */}
          <div className="flex flex-col gap-3">
            {OUTPUTS.map((o) => (
              <Row key={o.label} {...o} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
