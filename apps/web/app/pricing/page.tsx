import type { Metadata } from "next"
import { seoMetadata } from "@/lib/seo"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/v1"

type Plan = {
  name: string
  slug: string
  price: string
  per: string
  description: string
  cta_label: string
  cta_href: string
  features: string[]
  featured: boolean
}

type Fee = {
  channel: string
  name: string
  percent: string
  fixed: string
  note: string
}

const FALLBACK_PLANS: Plan[] = [
  {
    name: "Starter", slug: "starter", price: "Free", per: "",
    description: "For getting your first payments moving.",
    cta_label: "Start free", cta_href: "/auth/register", featured: false,
    features: ["Payment links & checkout", "Mobile money + cards",
               "Orders & bookings", "Email & SMS notifications",
               "1 business · 2 team seats"],
  },
  {
    name: "Business", slug: "business", price: "TZS 45,000", per: "/month",
    description: "For growing businesses that sell daily.",
    cta_label: "Start with Business", cta_href: "/auth/register",
    featured: true,
    features: ["Everything in Starter", "Invoices & subscriptions",
               "Multi-business accounts", "WhatsApp notifications",
               "Reports & CSV exports", "5 team seats · API keys"],
  },
  {
    name: "Enterprise", slug: "enterprise", price: "Talk to us", per: "",
    description: "Volume pricing, SLAs and dedicated support.",
    cta_label: "Contact sales", cta_href: "/auth", featured: false,
    features: ["Everything in Business", "Custom settlement terms",
               "Dedicated account manager", "Priority support & SLA",
               "Unlimited team seats"],
  },
]

const FALLBACK_FEES: Fee[] = [
  { channel: "mpesa", name: "M-Pesa", percent: "1.50", fixed: "0",
    note: "Per successful collection" },
  { channel: "airtel", name: "Airtel Money", percent: "1.50", fixed: "0",
    note: "Per successful collection" },
  { channel: "tigo", name: "Tigo Pesa", percent: "1.50", fixed: "0",
    note: "Per successful collection" },
  { channel: "card", name: "Cards (Visa / Mastercard)", percent: "2.90",
    fixed: "300", note: "+ TZS 300 per transaction" },
  { channel: "bank", name: "Bank transfer", percent: "0.80", fixed: "0",
    note: "Settlement T+1" },
  { channel: "payout", name: "Payouts to business", percent: "0.00",
    fixed: "1000", note: "Flat TZS 1,000 per payout" },
]

async function getPricing(): Promise<{ plans: Plan[]; fees: Fee[] }> {
  try {
    const res = await fetch(`${API_URL}/cms/pricing`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) throw new Error(String(res.status))
    const data = (await res.json()) as { plans: Plan[]; fees: Fee[] }
    return {
      plans: data.plans.length ? data.plans : FALLBACK_PLANS,
      fees: data.fees.length ? data.fees : FALLBACK_FEES,
    }
  } catch {
    return { plans: FALLBACK_PLANS, fees: FALLBACK_FEES }
  }
}

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Plans are monthly, no lock-in. Downgrade and keep your data — exports stay available.",
  },
  {
    q: "What does verification involve?",
    a: "Basic business details plus a document upload. Most accounts are verified within a day.",
  },
  {
    q: "Do fees differ by channel?",
    a: "Yes — each payment channel carries its own processing rate, shown in the fee table. Everything is deducted transparently at settlement.",
  },
]

export const metadata: Metadata = seoMetadata({
  title: "Pricing — plans & transaction fees",
  description:
    "Transparent XerinPay pricing: free starter plan, business plan and per-channel transaction fees for mobile money, cards and bank transfers.",
  path: "/pricing",
  keywords: ["payment gateway pricing", "transaction fees", "M-Pesa fees", "business plan pricing"],
})

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default async function PricingPage() {
  const { plans, fees } = await getPricing()

  return (
    <main className="min-h-svh bg-background">
      <SiteHeader />

      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Simple pricing.
            <br />
            <span className="text-muted-foreground">Honest numbers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-balance text-muted-foreground">
            Start free, upgrade when the volume justifies it. No setup fees,
            no surprises at settlement.
          </p>
        </div>
      </section>

      {/* plans — served from the backend, editable in admin */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {plans.map((t) => (
            <article
              key={t.slug}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                t.featured
                  ? "bg-foreground text-background shadow-xl"
                  : "border bg-card shadow-sm hover:shadow-lg"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  Most popular
                </span>
              )}
              <h2 className="text-sm font-semibold uppercase tracking-widest opacity-70">
                {t.name}
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight">
                {t.price}
                {t.per && (
                  <span className="text-sm font-medium opacity-60">
                    {" "}
                    {t.per}
                  </span>
                )}
              </p>
              <p
                className={`mt-2 text-sm ${t.featured ? "text-background/70" : "text-muted-foreground"}`}
              >
                {t.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      strokeWidth={2}
                      className={`mt-0.5 size-4 shrink-0 ${t.featured ? "text-lime-300" : "text-emerald-500"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 h-11 w-full ${
                  t.featured
                    ? "bg-lime-300 text-neutral-900 hover:bg-lime-200"
                    : ""
                }`}
                variant={t.featured ? "default" : "outline"}
                nativeButton={false}
                render={
                  <Link href={t.cta_href}>
                    {t.cta_label}
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
                  </Link>
                }
              />
            </article>
          ))}
        </div>
      </section>

      {/* fee table — real rates from the backend */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Transaction fees by channel
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Charged only on successful payments. The same rates power your
              settlement reports.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-3.5">Channel</th>
                  <th className="px-6 py-3.5">Rate</th>
                  <th className="hidden px-6 py-3.5 sm:table-cell">Fixed</th>
                  <th className="hidden px-6 py-3.5 md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {fees.map((f) => (
                  <tr
                    key={f.channel}
                    className="transition-colors hover:bg-muted/40"
                  >
                    <td className="px-6 py-4 font-semibold">{f.name}</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-emerald-600">
                        {f.percent}%
                      </span>
                    </td>
                    <td className="hidden px-6 py-4 text-muted-foreground sm:table-cell">
                      {Number(f.fixed) > 0 ? `TZS ${f.fixed}` : "—"}
                    </td>
                    <td className="hidden px-6 py-4 text-muted-foreground md:table-cell">
                      {f.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Rates are published and managed by the platform — no hidden
            markups at settlement.
          </p>
        </div>
      </section>

      {/* faq */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Quick answers
          </h2>
          <div className="mt-8 divide-y rounded-2xl border bg-card">
            {FAQS.map((f) => (
              <div key={f.q} className="p-6">
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
