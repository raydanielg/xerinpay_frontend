import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"

export const NAV = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Developers", href: "/developers" },
]

/** Shared light header for inner marketing pages. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="XerinPay"
              width={30}
              height={30}
              className="size-8 object-contain"
              priority
            />
            <span className="font-semibold tracking-tight">XerinPay</span>
          </Link>
          <span aria-hidden className="hidden h-6 w-px bg-border md:block" />
        </div>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:flex">
          {NAV.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span aria-hidden className="hidden h-6 w-px bg-border md:block" />
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            nativeButton={false}
            render={<Link href="/auth">Sign in</Link>}
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/auth/register">
                Get started
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2.5} />
              </Link>
            }
          />
        </div>
      </div>
    </header>
  )
}
