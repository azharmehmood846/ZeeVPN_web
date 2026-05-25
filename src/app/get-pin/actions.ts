"use server";

import {
  assessFreePinEligibility,
  freePinEligibilitySchema,
  type FreePinEligibilityInput,
} from "@/lib/free-pin-eligibility";

export async function handlePinEligibility(input: FreePinEligibilityInput) {
    try {
        const parsedInput = freePinEligibilitySchema.parse(input);
        const result = assessFreePinEligibility(parsedInput);
        return result;
    } catch (error) {
        console.error("Error in handlePinEligibility server action:", error);
        throw new Error("Failed to assess PIN eligibility.");
    }
}
