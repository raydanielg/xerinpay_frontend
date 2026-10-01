"use client"

import { useState } from "react"
import Link from "next/link"

import { cn } from "cn"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
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
  SquareLock02Icon,
  UserIcon,
  Building03Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { api, ApiError } from "@/lib/api"

const FRIENDLY: Record<string, string> = {
  email_taken: "That email already has an account. Try signing in instead.",
  invalid_request: "Check the fields and try again — passwords need 12+ characters.",
}

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    const form = new FormData(e.currentTarget)
    const password = String(form.get("password") ?? "")
    if (password !== form.get("confirm")) {
      setError("The passwords don't match.")
      return
    }
    if (password.length < 12) {
      setError("Use at least 12 characters for your password.")
      return
    }
    setBusy(true)
    setError(null)
    try {
      await api("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          business_name: form.get("business"),
          name: form.get("name"),
          email: form.get("email"),
          password,
        }),
      })
      setDone(true)
    } catch (err) {
      setError(
        err instanceof ApiError
          ? (FRIENDLY[err.code] ?? "Sign up failed. Please try again.")
          : "No connection. Check your internet and try again.",
      )
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} className="size-6" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">You&apos;re in</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Your business account is created. Sign in to finish verification
            and start accepting payments.
          </p>
        </div>
        <Button
          size="lg"
          className="h-11"
          nativeButton={false}
              render={<Link href="/auth">Continue to sign in</Link>}
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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            One account for payments, orders, bookings and reports.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="business">Business name</FieldLabel>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={Building03Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="business"
              name="business"
              autoComplete="organization"
              placeholder="Your business name"
              required
            />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="name">Your name</FieldLabel>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
            />
          </InputGroup>
        </Field>
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
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={SquareLock02Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 12 characters"
              minLength={12}
              required
            />
          </InputGroup>
          <FieldDescription>
            12+ characters keeps your money safe.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={SquareLock02Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="Type it again"
              minLength={12}
              required
            />
          </InputGroup>
        </Field>
        {error && <FieldError>{error}</FieldError>}
        <Field>
          <Button type="submit" disabled={busy} size="lg" className="h-11 text-sm">
            {busy && <Spinner />}
            {busy ? "Creating account…" : "Create account"}
          </Button>
        </Field>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth" className="underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </FieldGroup>
    </form>
  )
}
