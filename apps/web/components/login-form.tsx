"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

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
  ShieldKeyIcon,
} from "@hugeicons/core-free-icons"
import { api, ApiError } from "@/lib/api"

const FRIENDLY: Record<string, string> = {
  invalid_credentials: "Email or password is incorrect.",
  account_locked: "Your account is temporarily locked. Try again later.",
  otp_required: "Enter the 6-digit code from your authenticator.",
  invalid_otp: "That code is not correct. Check your authenticator app.",
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [otpStep, setOtpStep] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    const form = new FormData(e.currentTarget)
    setBusy(true)
    setError(null)
    try {
      await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
          ...(otpStep ? { otp: form.get("otp") } : {}),
        }),
      })
      router.replace("/")
    } catch (err) {
      if (err instanceof ApiError && err.code === "otp_required") {
        setOtpStep(true)
        setError(null)
      } else {
        setError(
          err instanceof ApiError
            ? (FRIENDLY[err.code] ?? "Sign in failed. Please try again.")
            : "No connection. Check your internet and try again.",
        )
      }
    } finally {
      setBusy(false)
    }
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={onSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Sign in to XerinPay</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email and password to continue
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
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="/auth/forgot-password"
              className="ms-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <InputGroup className="h-11">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={SquareLock02Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
            />
          </InputGroup>
        </Field>
        {otpStep && (
          <Field>
            <FieldLabel htmlFor="otp">Two-factor code</FieldLabel>
            <InputGroup className="h-11">
              <InputGroupAddon align="inline-start">
                <HugeiconsIcon icon={ShieldKeyIcon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="otp"
                name="otp"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="••••••"
                maxLength={6}
                required
                className="text-center tracking-[0.5em]"
              />
            </InputGroup>
          </Field>
        )}
        {error && <FieldError>{error}</FieldError>}
        <Field>
          <Button type="submit" disabled={busy} size="lg" className="h-11 text-sm">
            {busy && <Spinner />}
            {busy ? "Signing in…" : "Sign in"}
          </Button>
        </Field>
        <FieldDescription className="text-center">
          Don&apos;t have an account?{" "}
          <a href="/auth/register" className="underline underline-offset-4">
            Create one
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
