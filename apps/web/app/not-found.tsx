import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Compass01Icon,
  Home01Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/topo.jpg')] bg-cover bg-center opacity-[0.06] dark:opacity-[0.12] dark:invert"
      />
      <div className="relative flex max-w-md flex-col items-center gap-6 text-center">
        <Image
          src="/logo.png"
          alt="XerinPay"
          width={56}
          height={56}
          className="size-14 object-contain"
          priority
        />
        <div className="flex items-center gap-3 text-muted-foreground">
          <HugeiconsIcon icon={Compass01Icon} strokeWidth={2} className="size-6" />
          <span className="text-6xl font-bold tracking-tight text-foreground">
            404
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Page not found</h1>
          <p className="text-sm text-balance text-muted-foreground">
            The page you are looking for doesn&apos;t exist or may have been
            moved. Check the address or head back to safety.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="h-11"
            nativeButton={false}
              render={
              <Link href="/">
                <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                Go home
              </Link>
            }
          />
          <Button
            variant="outline"
            size="lg"
            className="h-11"
            nativeButton={false}
              render={
              <Link href="/auth">
                <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
                Back to sign in
              </Link>
            }
          />
        </div>
        <p className="text-xs text-muted-foreground">Protected by Xerixa</p>
      </div>
    </div>
  )
}
