import type { Metadata } from "next"

export const SITE = {
  name: "XerinPay",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xerinpay.com",
  description:
    "Payments, orders, bookings and settlements in one platform — built for modern businesses.",
  ogImage: "/og.png",
} as const

/** Central metadata builder — every public page gets unique title/desc,
 * canonical, OG and Twitter cards through one helper. */
export function seoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const url = `${SITE.url}${path}`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [SITE.ogImage],
    },
  }
}
