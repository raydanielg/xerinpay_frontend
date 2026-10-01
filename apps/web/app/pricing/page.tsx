import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const TIERS = [
  {
    name: "Starter",
    price: "Free",
    sub: "For getting your first payments moving.",
    cta: "Start free",
    href: "/auth/register",
    featured: false,
    features: [
      "Payment links & checkout",
      "Mobile money + cards",
      "Orders & bookings",
      "Email & SMS notifications",
      "1 business · 2 team seats",
    ],
  },
  {
    name: "Business",
    price: "TZS 45,000",
    per: "/month",
    sub: "For growing businesses that sell daily.",
    cta: "Start with Business",
    href: "/auth/register",
    featured: true,
    features: [
      "Everything in Starter",
      "Invoices & subscriptions",
      "Multi-business accounts",
      "WhatsApp notifications",
      "Reports & CSV exports",
      "5 team seats · API keys",
    ],
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    sub: "Volume pricing, SLAs and dedicated support.",
    cta: "Contact sales",
    href: "/auth",
    featured: false,
    features: [
      "Everything in Business",
      "Custom settlement terms",
      "Dedicated account manager",
      "Priority support & SLA",
      "Unlimited team seats",
    ],
  },
]

const FAQS = [
  {
    q: "Are there transaction fees?",
    a: "Yes — a small percentage per successful payment, depending on channel. Mobile money rates differ from cards; everything is shown before you go live.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Plans are monthly, no lock-in. Downgrade and keep your data — exports stay available.",
  },
  {
    q: "What does verification involve?",
    a: "Basic business details plus a document upload. Most accounts are verified within a day.",
  },
]

export default function PricingPage() {
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

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
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
                {t.sub}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm"
                  >
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
                  <Link href={t.href}>
                    {t.cta}
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
                  </Link>
                }
              />
            </article>
          ))}
        </div>
      </section>

      {/* faq */}
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
