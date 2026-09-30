"use client"

import { useEffect, useState } from "react"

const IMAGES = [
  "/auth/pay-phone.jpg",
  "/auth/secure-pin.jpg",
  "/auth/terminal.jpg",
  "/auth/bills.jpg",
  "/auth/transfer.jpg",
  "/auth/locked.jpg",
  "/auth/card-phone.jpg",
  "/auth/checkout.jpg",
  "/auth/swipe.jpg",
  "/auth/pos.jpg",
  "/auth/cashback.jpg",
  "/auth/contactless.jpg",
  "/auth/secure-payment.jpg",
  "/auth/phone-bill.jpg",
  "/auth/card-cash.jpg",
  "/auth/tap-to-pay.jpg",
  "/auth/secure-tx.jpg",
  "/auth/success-blue.jpg",
  "/auth/success-dark.jpg",
  "/auth/success-light.jpg",
  "/auth/card-phone-2.jpg",
]

/** Rotating financial artwork for the auth column - subtle crossfade. */
export function AuthArt() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative hidden lg:block bg-muted overflow-hidden">
      {IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 dark:brightness-[0.6]"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8">
        <p className="text-lg font-medium text-white">
          Payments, business and reporting in one place.
        </p>
        <p className="mt-1 text-sm text-white/70">
          XerinPay runs your checkout, orders, bookings and settlements.
        </p>
      </div>
    </div>
  )
}
