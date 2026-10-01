import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  ChartBarLineIcon,
  ArrowUpRight01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"

const cardBase =
  "rounded-2xl bg-white p-4 shadow-2xl shadow-black/25 ring-1 ring-black/5"

/** Bottom strip of tilted product cards rising above the hero edge. */
function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden items-end justify-center gap-5 px-8 lg:flex">
      {/* settled metric - dark */}
      <div className={`${cardBase} mb-10 w-44 rotate-[-8deg] bg-neutral-900`}>
        <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
          Settled today
        </p>
        <p className="mt-1 text-xl font-bold text-white">TZS 4.2M</p>
        <p className="mt-2 text-[11px] text-emerald-400">Airtel · M-Pesa · Tigo</p>
      </div>

      {/* photo card */}
      <div className="mb-16 w-40 rotate-[5deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/25 ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/auth/checkout.jpg"
          alt=""
          className="h-32 w-full object-cover"
        />
        <div className="bg-white px-3 py-2">
          <p className="text-[11px] font-medium text-neutral-700">
            Checkout link opened
          </p>
        </div>
      </div>

      {/* hours saved stat with sparkline */}
      <div className={`${cardBase} mb-14 w-44 rotate-[-3deg]`}>
        <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
          Hours saved
        </p>
        <p className="mt-1 text-2xl font-bold text-neutral-900">
          6.4 <span className="text-sm font-medium text-neutral-400">hrs/wk</span>
        </p>
        <svg viewBox="0 0 120 32" className="mt-2 h-8 w-full">
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            points="0,26 20,22 40,24 60,16 80,18 100,8 120,4"
          />
        </svg>
      </div>

      {/* dark copy card */}
      <div className={`${cardBase} mb-24 w-52 rotate-[4deg] bg-neutral-900`}>
        <span className="mb-2 block size-1.5 rounded-full bg-emerald-400" />
        <p className="text-sm font-medium leading-snug text-white">
          Orders, bookings and invoices — settled into one balance.
        </p>
      </div>

      {/* glass upload card */}
      <div className="mb-8 w-44 -rotate-2 rounded-2xl bg-white/20 p-4 ring-1 ring-white/30 backdrop-blur-md">
        <span className="mx-auto flex size-8 items-center justify-center rounded-full bg-white/30 text-white">
          <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2.5} className="size-4" />
        </span>
        <p className="mt-2 text-center text-[11px] font-medium text-white">
          KYC verified
        </p>
        <p className="text-center text-[10px] text-white/70">
          Limits unlocked
        </p>
      </div>

      {/* settlement checklist */}
      <div className={`${cardBase} mb-20 w-52 rotate-[6deg]`}>
        <p className="text-[11px] font-semibold text-neutral-900">
          Today&apos;s settlements
        </p>
        <ul className="mt-2 space-y-1.5">
          {[
            "Checkout #4821",
            "Booking deposit",
            "Invoice XP-1042",
            "Market stall",
          ].map((l) => (
            <li
              key={l}
              className="flex items-center gap-2 text-[11px] text-neutral-600"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                strokeWidth={2}
                className="size-3.5 text-emerald-500"
              />
              {l}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[10px] text-neutral-400">12 payouts sent</p>
      </div>

      {/* photo card 2 */}
      <div className="mb-12 w-40 rotate-[-5deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/25 ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/auth/tap-to-pay.jpg"
          alt=""
          className="h-32 w-full object-cover"
        />
        <div className="bg-white px-3 py-2">
          <p className="text-[11px] font-medium text-neutral-700">
            Tap-to-pay received
          </p>
        </div>
      </div>

      {/* lime stat */}
      <div className="mb-16 w-36 rotate-[7deg] rounded-2xl bg-lime-300 p-4 shadow-2xl shadow-black/20">
        <p className="text-[10px] font-medium uppercase tracking-wider text-lime-900">
          Success rate
        </p>
        <p className="mt-1 text-2xl font-bold text-lime-950">98.4%</p>
        <p className="mt-1 text-[10px] text-lime-800">payments, last 30 days</p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-svh bg-background p-3 md:p-5">
      <section className="relative flex min-h-[94svh] flex-col overflow-hidden rounded-3xl">
        {/* environment backdrop */}
        <Image src="/hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/70 via-black/25 to-black/45" />

        {/* header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="XerinPay"
              width={34}
              height={34}
              className="size-9 rounded-lg bg-white object-contain p-0.5"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-white">
              XerinPay
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/80 md:flex">
            <Link href="/" className="transition-colors hover:text-white">
              Product
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Developers
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white md:inline-flex"
              render={<Link href="/auth">Sign in</Link>}
            />
            <Button
              className="rounded-full bg-lime-300 px-5 text-neutral-900 shadow-lg shadow-black/20 hover:bg-lime-200"
              render={
                <Link href="/auth/register">
                  Get started
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
                </Link>
              }
            />
          </div>
        </header>

        {/* hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-64 text-center lg:pb-72">
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Less chasing payments,
            <br />
            <span className="font-medium text-white/70">
              more building business.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/85 md:text-base">
            Checkout, orders, bookings and settlements — everything your
            business earns, in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/30 bg-white/10 px-6 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              render={<Link href="/auth">See how it works</Link>}
            />
            <Button
              className="h-11 rounded-full bg-lime-300 px-6 text-xs font-semibold uppercase tracking-wider text-neutral-900 shadow-xl shadow-black/25 hover:bg-lime-200"
              render={
                <Link href="/auth/register">
                  Get started
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
                </Link>
              }
            />
          </div>
        </div>

        <FloatingCards />
      </section>
    </main>
  )
}
