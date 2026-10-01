import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  ChartBarLineIcon,
  Notification01Icon,
  ArrowUpRight01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"

function FloatingCards() {
  return (
    <>
      {/* payment confirmation - bottom left */}
      <div className="absolute -bottom-6 left-6 hidden rotate-[-4deg] lg:block xl:left-14">
        <div className="w-64 rounded-2xl bg-white p-4 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                strokeWidth={2}
                className="size-5"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Payment received
              </p>
              <p className="text-xs text-neutral-500">
                Airtel Money · just now
              </p>
            </div>
          </div>
          <p className="mt-3 text-2xl font-bold text-neutral-900">
            TZS 145,000
          </p>
          <p className="text-xs text-neutral-500">Order #4821 · settled</p>
        </div>
      </div>

      {/* weekly revenue - bottom right */}
      <div className="absolute -bottom-8 right-6 hidden rotate-[3deg] lg:block xl:right-14">
        <div className="w-72 rounded-2xl bg-white p-4 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={ChartBarLineIcon}
                strokeWidth={2}
                className="size-4 text-neutral-400"
              />
              <p className="text-xs font-medium text-neutral-500">
                Revenue this week
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                strokeWidth={2}
                className="size-3"
              />
              18%
            </span>
          </div>
          <p className="mt-1 text-2xl font-bold text-neutral-900">
            TZS 3.2M
          </p>
          <div className="mt-3 flex h-14 items-end gap-1.5">
            {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-emerald-500/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* notification - right edge, sits above revenue card */}
      <div className="absolute bottom-40 right-10 hidden rotate-[-2deg] xl:block">
        <div className="flex w-60 items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl shadow-black/15 backdrop-blur-sm">
          <span className="flex size-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <HugeiconsIcon
              icon={Notification01Icon}
              strokeWidth={2}
              className="size-4"
            />
          </span>
          <div>
            <p className="text-xs font-semibold text-neutral-900">
              New booking
            </p>
            <p className="text-[11px] text-neutral-500">
              Salon · tomorrow 10:00
            </p>
          </div>
        </div>
      </div>

      {/* balance chip - left edge */}
      <div className="absolute bottom-44 left-10 hidden rotate-[2deg] xl:block">
        <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 pe-5 shadow-xl shadow-black/15 backdrop-blur-sm">
          <span className="flex size-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <HugeiconsIcon
              icon={Wallet01Icon}
              strokeWidth={2}
              className="size-4"
            />
          </span>
          <div>
            <p className="text-[11px] text-neutral-500">Available balance</p>
            <p className="text-sm font-bold text-neutral-900">TZS 8,540,200</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <main className="min-h-svh bg-background p-3 md:p-5">
      <section className="relative flex min-h-[94svh] flex-col overflow-hidden rounded-3xl">
        {/* environment backdrop */}
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />

        {/* header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="XerinPay"
              width={34}
              height={34}
              className="size-9 object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-white">
              XerinPay
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <Link href="/" className="transition-colors hover:text-white">
              Product
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Developers
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Support
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white md:inline-flex"
              render={<Link href="/auth">Sign in</Link>}
            />
            <Button
              className="bg-white text-neutral-900 shadow-lg shadow-black/20 hover:bg-white/90"
              render={
                <Link href="/auth/register">
                  Get started
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    strokeWidth={2}
                  />
                </Link>
              }
            />
          </div>
        </header>

        {/* hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            Payments · Orders · Bookings · Reports
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Less chasing payments,
            <br />
            <span className="text-white/70">more building business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
            Accept payments, run orders and bookings, and watch every
            shilling settle — one platform for your entire business.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-12 gap-2 bg-white px-7 text-sm text-neutral-900 shadow-xl shadow-black/25 hover:bg-white/90"
              render={
                <Link href="/auth/register">
                  Start free
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    strokeWidth={2}
                  />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/10 px-7 text-sm text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              render={<Link href="/auth">Sign in</Link>}
            />
          </div>
        </div>

        {/* floating product cards */}
        <FloatingCards />

        {/* breathing room under the cards */}
        <div className="relative z-10 h-24 md:h-32" />
      </section>
    </main>
  )
}
