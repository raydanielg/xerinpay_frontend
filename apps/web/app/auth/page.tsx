import { AuthShell } from "@/components/auth-shell"
import { LoginForm } from "@/components/login-form"

export default function AuthPage() {
  return (
    <AuthShell note="Forgot your password? It happens to everyone — we'll get you back in a minute.">
      <LoginForm />
    </AuthShell>
  )
}
