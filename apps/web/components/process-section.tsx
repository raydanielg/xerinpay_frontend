import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

const STEPS = [
  {
    n: "01",
    title: "Create account",
    desc: "Business name, email, done. Your owner login is ready in under a minute.",
  },
  {
    n: "02",
    title: "Verify & configure",
    desc: "Upload your business details once. Most verifications clear the same day.",
  },
  {
    n: "03",
    title: "Start accepting",
    desc: "Payment links, checkout and storefront — live on mobile money and cards.",
  },
  {
    n: "04",
    title: "Settle & report",
    desc: "Payouts land on schedule, reports reconcile themselves.",
  },
]

export function ProcessSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl rounded-3xl border bg-muted/40 p-8 md:p-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              How getting started works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              From signup
              <br />
              <span className="text-muted-foreground">to first payout.</span>
            </h2>
          </div>
          <Link
            href="/auth/register"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline md:inline-flex"
          >
            Full setup guide
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t pt-5">
              <p className="text-xs font-semibold text-muted-foreground">
                {s.n}
              </p>
              <p className="mt-2 font-semibold">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
