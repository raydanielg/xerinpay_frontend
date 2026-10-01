import type { Metadata } from "next"

/** Auth pages must never be indexed — transactional, not content. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
