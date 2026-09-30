import { AuthShell } from "@/components/auth-shell"
import { ForgotPasswordForm } from "@/components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <AuthShell note="Locked out for now? A reset link is all it takes — no calls, no queues.">
      <ForgotPasswordForm />
    </AuthShell>
  )
}
