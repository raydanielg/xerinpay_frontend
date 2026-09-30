import { HugeiconsIcon } from "@hugeicons/react"
import { Wallet01Icon } from "@hugeicons/core-free-icons"

import { AuthArt } from "@/components/auth-art"
import { LoginForm } from "@/components/login-form"

export default function AuthPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <HugeiconsIcon icon={Wallet01Icon} strokeWidth={2} className="size-4" />
            </div>
            XerinPay
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground md:text-start">
          Protected by PIN, two-factor authentication and device management.
        </p>
      </div>
      <AuthArt />
    </div>
  )
}
