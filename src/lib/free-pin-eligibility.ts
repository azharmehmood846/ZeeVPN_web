import { z } from "zod";

export const freePinEligibilitySchema = z.object({
  location: z.string().min(2, "Location must be at least 2 characters."),
  usagePatterns: z
    .string()
    .min(10, "Please describe your usage in at least 10 characters."),
  vpnUsage: z.string().optional(),
});

export type FreePinEligibilityInput = z.infer<typeof freePinEligibilitySchema>;

export type FreePinEligibilityOutput = {
  isEligible: boolean;
  reason: string;
  recommendation: string;
};

const PREMIUM_SIGNALS = [
  "business",
  "company",
  "office",
  "team",
  "streaming",
  "torrent",
  "gaming",
  "multiple devices",
  "always on",
];

const FREE_SIGNALS = [
  "privacy",
  "public wifi",
  "travel",
  "school",
  "study",
  "browsing",
  "social",
  "chat",
  "messages",
  "work from home",
];

export function assessFreePinEligibility(
  input: FreePinEligibilityInput
): FreePinEligibilityOutput {
  const normalizedText = [
    input.location,
    input.usagePatterns,
    input.vpnUsage ?? "",
  ]
    .join(" ")
    .toLowerCase();

  const premiumScore = PREMIUM_SIGNALS.filter((signal) =>
    normalizedText.includes(signal)
  ).length;
  const freeScore = FREE_SIGNALS.filter((signal) =>
    normalizedText.includes(signal)
  ).length;
  const isFirstTimeUser = !input.vpnUsage?.trim();

  if (premiumScore >= 2 && !isFirstTimeUser) {
    return {
      isEligible: false,
      reason:
        "Your usage sounds like a heavy or repeat-use case that is better suited to a paid plan than a short trial PIN.",
      recommendation:
        "Use the download page to install Zee VPN, then choose a premium plan for longer sessions and more stable access.",
    };
  }

  if (freeScore > 0 || isFirstTimeUser) {
    return {
      isEligible: true,
      reason:
        "Your request matches the lightweight, introductory use cases we support with a free 6-hour PIN.",
      recommendation:
        "Download the app, request your PIN from support, and use the trial to test connection speed and coverage on your device.",
    };
  }

  return {
    isEligible: true,
    reason:
      "Your request looks suitable for a short evaluation session, so you can proceed with a free PIN trial.",
    recommendation:
      "Install the app and use the free PIN to verify the service fits your location and browsing needs before upgrading.",
  };
}
