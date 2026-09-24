const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

/** Build a FastAPI endpoint URL without scattering the base URL in components. */
export function apiUrl(path: string): string {
  if (!apiBase) throw new Error("NEXT_PUBLIC_API_URL is not configured");
  return `${apiBase}/${path.replace(/^\//, "")}`;
}
