import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"

const TILES = [
  "/auth/checkout.jpg",
  "/auth/swipe.jpg",
  "/auth/pos.jpg",
  "/auth/contactless.jpg",
  "/auth/card-phone.jpg",
  "/auth/terminal.jpg",
  "/auth/tap-to-pay.jpg",
  "/auth/secure-payment.jpg",
  "/auth/cashback.jpg",
  "/auth/bills.jpg",
  "/auth/transfer.jpg",
  "/auth/success-blue.jpg",
]

const TESTIMONIALS = [
  {
    initials: "NM",
    name: "Neema M.",
    role: "Boutique owner, Dar es Salaam",
    quote:
      "Payments used to live in three different apps and a notebook. Now I open one screen and see the whole day.",
    stars: 5,
  },
  {
    initials: "JK",
    name: "Juma K.",
    role: "Events & ticketing",
    quote:
      "Tickets, deposits, refunds — everything reconciles itself. Settlement reports alone saved my accountant hours.",
    stars: 5,
  },
  {
    initials: "SA",
    name: "Sarah A.",
    role: "Salon & bookings",
    quote:
      "Clients book and pay deposits without calling me. My chair stays full and I stopped chasing payments.",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* image collage */}
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-2.5 sm:grid-cols-6">
          {TILES.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
                i % 5 === 0 ? "translate-y-3" : i % 3 === 0 ? "-translate-y-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Trusted by businesses
            <br />
            <span className="text-muted-foreground">
              on and off the street.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {t.initials}
                </span>
                <figcaption>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
                <span className="ms-auto flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={StarIcon}
                      strokeWidth={0}
                      fill="currentColor"
                      className="size-3 text-amber-400"
                    />
                  ))}
                </span>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
