import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { downloadPlatforms } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Download Zee VPN — Free Android VPN App",
  description:
    "Download Zee VPN — free Android VPN unlocked by a single short ad. No subscription, no signup. Available on Android, with desktop and other platforms coming soon.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Zee VPN — Free Android VPN App",
    description:
      "Free Android VPN. Watch one short ad to unlock hours of unlimited, encrypted access.",
    url: `${SITE_URL}/download`,
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  operatingSystem: "Android",
  applicationCategory: "SecurityApplication",
  description:
    "Free Android VPN unlocked by a single short ad. Unlimited, encrypted, no signup required.",
  url: `${SITE_URL}/download`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function DownloadPage() {
    return (
        <div className="container pb-24 pt-[calc(6rem+4.5rem)]">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
            />
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Download Zee VPN</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Secure all your devices. Zee VPN is available on all major platforms.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {downloadPlatforms.map((platform) => (
                    <Card key={platform.name} className="rounded-xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <platform.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div>
                                <CardTitle className="font-bold font-headline">{platform.name}</CardTitle>
                                <CardDescription>{platform.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full rounded-lg">
                                <Link href="#">
                                    Get Secured Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
