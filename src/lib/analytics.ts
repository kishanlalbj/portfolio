declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", name, params]);
}
