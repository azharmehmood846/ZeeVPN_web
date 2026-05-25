import { ContactForm } from './contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function ContactPage() {
    return (
        <div className="container py-24">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Contact Us</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Have a question or need support? We're here to help.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="rounded-xl">
                    <CardHeader>
                        <CardTitle className="font-bold font-headline text-2xl">Send us a message</CardTitle>
                        <CardDescription>Our team will get back to you within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold font-headline">Get in Touch</h2>
                    <p className="text-muted-foreground">
                        You can also reach us through the following channels. We look forward to hearing from you!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:contact@zeevpn.com" className="text-muted-foreground hover:text-primary">contact@zeevpn.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-muted-foreground">123 VPN Street, Internet City, 10101</p>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-center space-x-2">
                        {socialLinks.map((social) => (
                        <Button key={social.name} variant="outline" size="icon" asChild className="rounded-lg">
                            <Link href={social.href}>
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                            </Link>
                        </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
