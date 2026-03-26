/**
 * Canonical origin for metadata (Open Graph, canonical URLs, etc.).
 * Vercel: set NEXT_PUBLIC_SITE_URL to your production domain in Project → Settings → Environment Variables.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (explicit) {
    try {
      return new URL(explicit.endsWith("/") ? explicit.slice(0, -1) : explicit);
    } catch {
      /* ignore invalid */
    }
  }

  /** Preview / dev deployment host (no protocol in env). @see https://vercel.com/docs/projects/environment-variables */
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  return new URL("http://localhost:3000");
}
