import type { Metadata } from "next"
import { seoMetadata } from "@/lib/seo"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  CreditCardIcon,
  ShoppingBag01Icon,
  Calendar03Icon,
  Invoice01Icon,
  ChartBarLineIcon,
  ShieldCheckIcon,
  Building03Icon,
  Wallet01Icon,
  Notification01Icon,
  WhatsappIcon,
  ApiIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const MODULES = [
  {
    icon: CreditCardIcon,
    title: "Payments",
    desc: "Mobile money, cards and payment links settle into one ledger — with receipts, refunds and dispute states built in.",
    points: ["Selcom & AzamPay routing", "Idempotent checkout API", "Receipts customers trust"],
  },
  {
    icon: ShoppingBag01Icon,
    title: "Orders & inventory",
    desc: "Products, stock movements and fulfilment from cart to delivery — quantities you can rely on.",
    points: ["Stock movements ledger", "Low-stock alerts", "Order timeline"],
  },
  {
    icon: Calendar03Icon,
    title: "Bookings",
    desc: "Services, slots, deposits and reminders — cancellations handled without spreadsheet chaos.",
    points: ["Deposit collection", "Staff calendars", "Auto reminders"],
  },
  {
    icon: Invoice01Icon,
    title: "Invoices",
    desc: "Branded invoices with partial payments, reminders and reconciliation in the same ledger.",
    points: ["Partial payments", "Auto reconcile", "PDF-ready records"],
  },
  {
    icon: ChartBarLineIcon,
    title: "Reports & settlements",
    desc: "Daily settlement reports, channel breakdowns and exportable statements.",
    points: ["Channel breakdown", "Payout tracking", "CSV exports"],
  },
  {
    icon: Building03Icon,
    title: "Multi-business",
    desc: "Run several businesses under one login — data stays strictly separated per business.",
    points: ["Role-aware staff", "Per-business KYC", "Separate balances"],
  },
]

const TRUST = [
  { icon: ShieldCheckIcon, label: "PIN, 2FA & device management" },
  { icon: Wallet01Icon, label: "Double-entry ledger" },
  { icon: Notification01Icon, label: "Instant alerts & webhooks" },
  { icon: WhatsappIcon, label: "WhatsApp notifications" },
  { icon: ApiIcon, label: "Developer API & keys" },
]

export const metadata: Metadata = seoMetadata({
  title: "Product — payments, orders, bookings & reports",
  description:
    "How XerinPay runs your whole business: payment links, checkout, orders, inventory, bookings, invoices, settlements and reports in one place.",
  path: "/product",
  keywords: ["payment platform", "order management", "booking system", "invoicing", "business reports"],
})

export default function ProductPage() {
  return (
    <main className="min-h-svh bg-background">
      <SiteHeader />

      {/* intro */}
      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Product
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            One platform for the
            <br />
            <span className="text-muted-foreground">whole business.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground md:text-lg">
            Payments are only the beginning. XerinPay runs the orders,
            bookings, invoices and settlements behind them — so nothing
            lives in a spreadsheet.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              className="h-11 px-6"
              nativeButton={false}
              render={
                <Link href="/auth/register">
                  Start free
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
                </Link>
              }
            />
            <Button
              variant="outline"
              className="h-11 px-6"
              nativeButton={false}
              render={<Link href="/pricing">See pricing</Link>}
            />
          </div>
        </div>
      </section>

      {/* module grid */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <article
              key={m.title}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-foreground text-background">
                <HugeiconsIcon icon={m.icon} strokeWidth={2} className="size-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{m.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {m.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      strokeWidth={2}
                      className="size-3.5 text-emerald-500"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* trust band */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-foreground px-8 py-10 text-background md:px-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <h2 className="max-w-sm text-2xl font-bold tracking-tight">
              Serious controls, standard — not add-ons.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-xs font-medium"
                >
                  <HugeiconsIcon icon={t.icon} strokeWidth={2} className="size-4" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
