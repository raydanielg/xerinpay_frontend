"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  NewTwitterIcon,
  InstagramIcon,
  Linkedin01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"
import { api } from "@/lib/api"

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Payments", href: "/" },
      { label: "Checkout links", href: "/" },
      { label: "Orders & bookings", href: "/" },
      { label: "Reports", href: "/" },
      { label: "Mobile app", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Customers", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Newsroom", href: "/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/" },
      { label: "API reference", href: "/" },
      { label: "Webhooks", href: "/" },
      { label: "Status", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/" },
      { label: "Privacy policy", href: "/" },
      { label: "Refund policy", href: "/" },
      { label: "Security", href: "/" },
    ],
  },
]

const SOCIALS = [
  { icon: NewTwitterIcon, label: "X", href: "/" },
  { icon: InstagramIcon, label: "Instagram", href: "/" },
  { icon: Linkedin01Icon, label: "LinkedIn", href: "/" },
  { icon: Github01Icon, label: "GitHub", href: "/" },
]

function Newsletter() {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    const email = String(new FormData(e.currentTarget).get("email") ?? "")
    if (!email.includes("@")) {
      setError("Enter a valid email address.")
      return
    }
    setBusy(true)
    setError(null)
    try {
      await api("/cms/newsletter", {
        method: "POST",
        body: JSON.stringify({ email, source: "landing" }),
      })
      setDone(true)
    } catch {
      setError("Couldn't subscribe right now. Try again shortly.")
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-emerald-400">
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          strokeWidth={2}
          className="size-4"
        />
        You&apos;re on the list — we&apos;ll only send what matters.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <InputGroup className="h-11 border-white/15 bg-white/5 text-white">
        <InputGroupInput
          name="email"
          type="email"
          placeholder="Your work email"
          aria-label="Email for newsletter"
          required
          className="text-white placeholder:text-white/40"
        />
      </InputGroup>
      <Button
        type="submit"
        disabled={busy}
        className="h-11 shrink-0 rounded-xl bg-lime-300 px-4 text-neutral-900 hover:bg-lime-200"
      >
        {busy ? (
          <Spinner className="text-neutral-900" />
        ) : (
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
        )}
      </Button>
      {error && <p className="basis-full text-xs text-red-400">{error}</p>}
    </form>
  )
}

export function SiteFooter() {
  return (
    <footer className="px-6 pb-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-neutral-900 px-8 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          {/* brand + newsletter */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="XerinPay"
                width={34}
                height={34}
                className="size-9 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                XerinPay
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              One gateway for payments, orders, bookings and settlements —
              built for businesses that move fast.
            </p>
            <Newsletter />
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} XerinPay. All rights reserved.
            Protected by Xerixa.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <HugeiconsIcon icon={s.icon} strokeWidth={2} className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
