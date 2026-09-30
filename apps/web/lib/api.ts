const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/v1"

export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number,
  ) {
    super(message)
  }
}

/** Central fetch wrapper - session cookies ride along, never raw errors out. */
export async function api<T = unknown>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = (data as { error?: { code?: string; message?: string } }).error
    throw new ApiError(err?.code ?? "unknown", err?.message ?? "Request failed", res.status)
  }
  return data as T
}
