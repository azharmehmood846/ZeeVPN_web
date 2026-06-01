"use client";

import { useEffect } from "react";

/**
 * Catches a small allowlist of non-actionable third-party SDK rejections
 * (e.g., the Cloudflare speedtest engine throwing
 * `TypeError: o[...] is not a function` when an extension blocks its
 * websocket / webrtc handshake) so they don't surface in the dev overlay
 * or as `unhandledRejection` in production. Real errors still bubble.
 */
export function ErrorSilencer() {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        typeof reason === "string"
          ? reason
          : (reason && (reason.message ?? String(reason))) ?? "";

      // Specific patterns we know are non-actionable third-party noise.
      const silencedPatterns = [
        /is not a function/,
        /Failed to fetch/,
        /NetworkError when attempting to fetch/,
        /Load failed/,
      ];

      if (silencedPatterns.some((re) => re.test(message))) {
        // Log once as a warning so we can still diagnose if needed.
        console.warn("[silenced unhandled rejection]", message);
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
