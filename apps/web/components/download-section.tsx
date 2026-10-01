import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Apple01Icon,
  AndroidIcon,
  FingerprintScanIcon,
  Notification01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"

function StoreButton({
  icon,
  top,
  bottom,
}: {
  icon: typeof Apple01Icon
  top: string
  bottom: string
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-neutral-900 shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <HugeiconsIcon icon={icon} strokeWidth={2} className="size-6" />
      <span className="text-left">
        <span className="block text-[10px] font-medium uppercase tracking-wide text-neutral-500">
          {top}
        </span>
        <span className="block text-sm font-bold leading-tight">{bottom}</span>
      </span>
    </button>
  )
}

export function DownloadSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-neutral-900">
        {/* subtle topo texture */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/topo.jpg')] bg-cover bg-center opacity-[0.08] invert"
        />

        <div className="relative grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Mobile app
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Your business,
              <br />
              <span className="text-white/60">in your pocket.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Approve payouts, check balances and get pinged the moment money
              moves — with PIN and biometric lock built in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreButton
                icon={Apple01Icon}
                top="Download on"
                bottom="App Store"
              />
              <StoreButton
                icon={AndroidIcon}
                top="Get it on"
                bottom="Google Play"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <HugeiconsIcon
                  icon={FingerprintScanIcon}
                  strokeWidth={2}
                  className="size-4"
                />
                Biometric unlock
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HugeiconsIcon
                  icon={Notification01Icon}
                  strokeWidth={2}
                  className="size-4"
                />
                Instant alerts
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HugeiconsIcon
                  icon={Wallet01Icon}
                  strokeWidth={2}
                  className="size-4"
                />
                Live balance
              </span>
            </div>
          </div>

          {/* phone-style image stack */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rotate-[4deg] overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 hover:rotate-[2deg]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/auth/pay-phone.jpg"
                alt="XerinPay mobile app"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 -rotate-3 rounded-2xl bg-white p-3 shadow-xl">
              <p className="text-[10px] font-medium text-neutral-500">
                Payment received
              </p>
              <p className="text-sm font-bold text-black">TZS 85,000</p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 px-8 py-4 text-center md:px-14">
          <p className="text-xs text-white/50">
            New here?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              Create your account
            </Link>{" "}
            first — the app connects to your business.
          </p>
        </div>
      </div>
    </section>
  )
}
