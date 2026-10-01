import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ApiIcon,
  SourceCodeIcon,
  WebhookIcon,
  ShieldCheckIcon,
  ChartBarLineIcon,
  DatabaseIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const BLOCKS = [
  {
    icon: ApiIcon,
    title: "REST API",
    desc: "Versioned endpoints under /v1 — sessions, API keys and scoped access for every merchant.",
  },
  {
    icon: WebhookIcon,
    title: "Webhooks",
    desc: "Signed callbacks for payment state changes — idempotent, retried, replayable.",
  },
  {
    icon: DatabaseIcon,
    title: "Double-entry ledger",
    desc: "Every movement posts balanced entries. Reconciliation is built in, not bolted on.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security first",
    desc: "Idempotency keys, throttling, TOTP and device-scoped sessions on every request.",
  },
  {
    icon: ChartBarLineIcon,
    title: "Reports API",
    desc: "Settlements, balances and channel breakdowns — machine-readable and exportable.",
  },
  {
    icon: SourceCodeIcon,
    title: "Sandbox",
    desc: "Test mode keys, provider stubs and seeded data so you build against reality.",
  },
]

const SNIPPET = `curl https://api.xerinpay.com/v1/payments \\
  -H "Authorization: Bearer xpk_live_..." \\
  -H "Idempotency-Key: order-4821" \\
  -d '{
    "amount": 145000,
    "currency": "TZS",
    "channel": "mobile_money",
    "customer": {"phone": "2557..."}
  }'`

export default function DevelopersPage() {
  return (
    <main className="min-h-svh bg-background">
      <SiteHeader />

      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Developers
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Payments infrastructure
              <br />
              <span className="text-muted-foreground">you can trust.</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
              One API for mobile money, cards, orders and settlements.
              Idempotent by default, auditable by design.
            </p>
            <div className="mt-8 flex gap-3">
              <Button
                className="h-11 px-6"
                nativeButton={false}
                render={
                  <Link href="/auth/register">
                    Get API keys
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2.5}
                    />
                  </Link>
                }
              />
              <Button
                variant="outline"
                className="h-11 px-6"
                nativeButton={false}
                render={<Link href="/auth">Read the docs</Link>}
              />
            </div>
          </div>

          {/* code card */}
          <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-[11px] font-medium text-white/50">
                create-payment.sh
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-emerald-200">
              <code>{SNIPPET}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
                <HugeiconsIcon icon={b.icon} strokeWidth={2} className="size-4" />
              </span>
              <h2 className="mt-4 font-semibold">{b.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
