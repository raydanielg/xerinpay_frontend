import { AuthShell } from "@/components/auth-shell"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <AuthShell note="Setting up takes a couple of minutes — verification comes after.">
      <RegisterForm />
    </AuthShell>
  )
}
