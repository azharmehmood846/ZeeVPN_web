"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, submitContactForm } from "@/lib/contact-action";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState<{ name: string } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    const result = await submitContactForm(values);
    setIsLoading(false);
    if (result.success) {
      setSubmitted({ name: values.name });
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem] border border-accent/30 bg-[linear-gradient(180deg_in_oklch,rgba(56,179,108,0.08),rgba(56,179,108,0.025)_60%,transparent)] p-8 text-center backdrop-blur-sm">
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-x-4 -top-10 -z-10 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,179,108,0.22),transparent_70%)] blur-2xl"
        />
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <CheckCircle2 className="h-7 w-7 text-accent" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-[1.375rem] font-semibold tracking-[-0.02em] text-foreground">
          Thanks, {submitted.name} — message received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-[1.7] text-muted-foreground">
          We&apos;ll get back to you at the email you provided within
          one business day. In the meantime, you can download the app and start
          using Zee VPN right away.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone <span className="text-muted-foreground/60">(optional)</span></FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help?"
                  className="min-h-[140px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-full text-[0.9375rem] shadow-[0_8px_28px_-6px_rgba(37,99,235,0.55)]"
          disabled={isLoading}
        >
          {isLoading ? (
            "Sending…"
          ) : (
            <>
              Send message
              <Send className="ml-1.5 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
