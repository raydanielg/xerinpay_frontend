"use client"

import { useState } from "react"
import Link from "next/link"

import { cn } from "cn"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  CheckmarkCircle02Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons"
import { api, ApiError } from "@/lib/api"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    const email = new FormData(e.currentTarget).get("email")
    setBusy(true)
    setError(null)
    try {
      // Backend always answers ok - no account enumeration
      await api("/auth/password/forgot", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
      setSent(true)
    } catch (err) {
      setError(
        err instanceof ApiError
          ? "We couldn't send the reset email right now. Try again shortly."
          : "No connection. Check your internet and try again.",
      )
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} className="size-6" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Check your inbox</h1>
          <p className="text-sm text-balance text-muted-foreground">
            If an account exists for that email, a reset link is on its way.
            It expires in 15 minutes.
          </p>
        </div>
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
    )
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={onSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter the email you signed up with and we&apos;ll send you a reset
            link.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              required
            />
          </InputGroup>
        </Field>
        {error && <FieldError>{error}</FieldError>}
        <Field>
          <Button type="submit" disabled={busy} size="lg" className="h-11 text-sm">
            {busy && <Spinner />}
            {busy ? "Sending…" : "Send reset link"}
          </Button>
        </Field>
        <p className="text-center text-sm text-muted-foreground">
          Remembered it?{" "}
          <Link href="/auth" className="underline underline-offset-4">
            Back to sign in
          </Link>
        </p>
      </FieldGroup>
    </form>
  )
}
