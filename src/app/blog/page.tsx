import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Privacy & VPN Insights",
  description:
    "Practical insights on online privacy, VPN usage, public WiFi safety, and getting the most out of Zee VPN.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Zee VPN Blog — Privacy & VPN Insights",
    description:
      "Practical insights on online privacy, VPN usage, and digital safety.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
    return (
        <div className="container pb-24 pt-[calc(6rem+4.5rem)]">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Blog", path: "/blog" },
                  ])
                ),
              }}
            />
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">From the Blog</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Stay updated with the latest news on privacy, security, and Zee VPN updates.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <Card key={post.id} className="rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="p-0">
                            <Image
                                src={post.thumbnail}
                                alt={post.title}
                                data-ai-hint={post.aiHint}
                                width={400}
                                height={250}
                                className="w-full object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                            <Badge variant="outline" className="mb-2">{post.date}</Badge>
                            <CardTitle className="font-bold font-headline text-xl mt-2 line-clamp-2">
                                <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-3">{post.excerpt}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="#">Read more &rarr;</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
