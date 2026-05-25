"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  freePinEligibilitySchema,
  type FreePinEligibilityOutput,
} from "@/lib/free-pin-eligibility";
import { handlePinEligibility } from "./actions";
import { Terminal, Bot, CheckCircle, XCircle } from "lucide-react";

const formSchema = freePinEligibilitySchema;

export function PinForm() {
  const [result, setResult] = useState<FreePinEligibilityOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      usagePatterns: "",
      vpnUsage: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const eligibilityResult = await handlePinEligibility(values);
      setResult(eligibilityResult);
    } catch (error) {
      console.error("Error assessing eligibility:", error);
      setResult({
        isEligible: false,
        reason: "An unexpected error occurred. Please try again later.",
        recommendation: "If the problem persists, please contact our support team.",
      });
    }
    setIsLoading(false);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., New York, USA" {...field} />
                </FormControl>
                <FormDescription>
                  Your general location (city, country).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usagePatterns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typical Internet Usage</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Streaming movies, online gaming, remote work..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  How do you usually use the internet?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vpnUsage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous VPN Usage (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Used one before for work" {...field} />
                </FormControl>
                <FormDescription>
                  Have you used a VPN before? If so, for what purpose?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="rounded-lg w-full">
            {isLoading ? "Assessing..." : "Check My Eligibility"}
            <Bot className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>

      {result && (
        <Alert className={`mt-8 rounded-lg ${result.isEligible ? 'border-accent text-accent' : 'border-destructive'}`}>
          {result.isEligible ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4 text-destructive" />}
          <AlertTitle className={`font-bold font-headline ${result.isEligible ? '' : 'text-destructive'}`}>
            {result.isEligible ? "Congratulations! You're Eligible!" : "Eligibility Result"}
          </AlertTitle>
          <AlertDescription className="mt-2 space-y-2">
            <p className={`${result.isEligible ? 'text-accent-foreground/80' : 'text-destructive-foreground/80'}`}>{result.reason}</p>
            <p className={`${result.isEligible ? 'text-accent-foreground' : 'text-destructive-foreground'}`}>{result.recommendation}</p>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
