import Image from "next/image"
import Link from "next/link"

import { AuthArt } from "@/components/auth-art"

/** Shared two-column auth shell: branded form column + rotating artwork. */
export function AuthShell({
  children,
  note,
}: {
  children: React.ReactNode
  note?: string
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative flex flex-col gap-4 p-6 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[url('/topo.jpg')] bg-cover bg-center opacity-[0.06] dark:opacity-[0.12] dark:invert"
        />
        <div className="relative flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Image
              src="/logo.png"
              alt="XerinPay"
              width={32}
              height={32}
              className="size-8 object-contain"
              priority
            />
            XerinPay
          </Link>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
        <div className="relative space-y-1 text-center text-xs text-muted-foreground md:text-start">
          {note && <p>{note}</p>}
          <p>Protected by Xerixa</p>
        </div>
      </div>
      <AuthArt />
    </div>
  )
}
