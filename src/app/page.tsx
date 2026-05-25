
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { benefits, features, testimonials, premiumTiers, blogPosts } from '@/lib/data';
import { CheckCircle, ArrowRight, Ghost, Wifi, Rocket } from 'lucide-react';
import { LottieBg } from '@/components/lottie-bg';
import { RippleBg } from '@/components/ripple-bg';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const placeholderImages = {
  hero: "https://res.cloudinary.com/dc05bhncp/image/upload/v1757679097/Group-2-1_nqgjkc.png",
  feature1: "https://picsum.photos/seed/feature1/600/400",
  feature2: "https://picsum.photos/seed/feature2/600/400",
  featuresReliable: "https://res.cloudinary.com/dc05bhncp/image/upload/v1757680207/IPHONE_lkxrks.png",
  featuresAccess: "https://minograd.sirv.com/Home%20_%20Disconnected.png",
  featuresPremium: "https://picsum.photos/seed/feat-premium/600/600"
};

const benefitIcons: { [key: string]: React.ElementType } = {
  'Stay Anonymous Online': (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21c-1.25-1.25-2.97-2-5-2H9c-2.03 0-3.75.75-5 2" />
      <path d="M12 13a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" transform="translate(4 2)" />
      <circle cx="10" cy="9" r="1" />
      <circle cx="14" cy="9" r="1" />
      <path d="M4 13c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4" />
    </svg>
  ),
  'Protect Personal Data': (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M11.5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path d="M11.5 13.5c0 .69-.28 1.32-.73 1.77" />
      <path d="M14 22s-2-2-2-4 2-4 2-4" />
      <path d="M9 13.5c0 .69.28 1.32.73 1.77" />
      <path d="M7 22s2-2 2-4-2-4-2-4" />
    </svg>
  ),
  'Secure Public Wi-Fi': (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin  ="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <path d="M12 7a5 5 0 0 1 0 10" />
      <path d="M12 10a2 2 0 0 1 0 4" />
      <path d="M12 13h.01" />
    </svg>
  )
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
        <LottieBg />
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-down" delay={200}>
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent animate-glow [text-shadow:0_0_15px_hsl(var(--accent))]">
                Your Secure Gateway to the Internet
              </Badge>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-down">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground animate-glow [text-shadow:0_0_20px_hsl(var(--primary))]">
                  Experience a Safer, Unrestricted Internet
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={400}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a free 6-hour PIN to enjoy blazing-fast speeds, robust security, and complete online freedom with Zee VPN. No credit card required.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={600}>
              <div className="mt-10 flex justify-center gap-4">
                <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 active:scale-100 shadow-lg hover:shadow-primary/40">
                  <Link href="/get-pin">Get Free 6 Hour Pin <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" delay={800}>
            <div className="mt-16 md:mt-24">
              <Image 
                  src="https://minograd.sirv.com/Group-2-1.png"
                  alt="Zee VPN Dashboard"
                  data-ai-hint="VPN dashboard"
                  width={514}
                  height={520}
                  className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-28 bg-card/30">
        <div className="container">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-2">ADVANTAGES OF VPN 🔥</Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              What are The Benefits of Using a VPN?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Benefits of VPNs: Protect Your Privacy, Data, and Online Freedom
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.title] || CheckCircle;
              return (
                <AnimateOnScroll key={benefit.title} animation="fade-in-down" delay={index * 150}>
                  <Card className="bg-card/50 rounded-xl text-center border-border/50 shadow-lg hover:bg-card/80 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 h-full">
                    <CardHeader className="p-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 ring-4 ring-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl font-bold font-headline">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 overflow-hidden">
        <div className="container">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-2 uppercase tracking-widest text-accent border-accent/50">
              More Valuable Features <Rocket className="inline-block ml-2 h-4 w-4" />
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              Features offered by Zee VPN
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover All the Powerful Features of Zee VPN That Keep Your Data Secure, Protect Your Privacy, and Give You Unlimited Access to the Internet
            </p>
          </AnimateOnScroll>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Feature Card */}
            <AnimateOnScroll className="lg:col-span-2" animation="zoom-in">
              <Card className="bg-card/50 rounded-2xl border-border/50 shadow-2xl shadow-primary/10 overflow-hidden">
                <div className="grid md:grid-cols-2 items-center gap-8">
                  <div className="p-8 md:p-12">
                      <h3 className="text-3xl font-bold font-headline">Fast and Reliable Connection</h3>
                      <p className="mt-4 text-muted-foreground max-w-xl">
                          Maximize Your Internet Experience with a VPN That Offers Fast and Reliable Connections, Protects Your Privacy, and Provides Unrestricted Access to the Global Web
                      </p>
                      <Button asChild size="lg" className="mt-8 rounded-lg">
                          <Link href="/download">Download Zee VPN</Link>
                      </Button>
                  </div>
                  <div className="flex items-center justify-center p-8">
                      <Image
                          src="https://minograd.sirv.com/Group%206.png"
                          alt="VPN Speedometer UI"
                          data-ai-hint="VPN connection speed"
                          width={400}
                          height={387}
                          className="rounded-lg shadow-lg object-contain"
                      />
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>

            {/* Unlimited Access Card */}
            <AnimateOnScroll animation="slide-in-right">
              <Card className="bg-card/50 rounded-2xl border-border/50 shadow-xl shadow-primary/5 flex flex-col h-full">
                  <CardHeader className="p-8 text-center">
                      <Image
                          src="https://minograd.sirv.com/Home%20_%20Disconnected.png"
                          alt="Unlimited Access UI"
                          data-ai-hint="vpn disconnected"
                          width={447}
                          height={476}
                          className="rounded-lg shadow-md mb-6 mx-auto"
                      />
                      <h3 className="text-2xl font-bold font-headline">Unlimited Access</h3>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow text-center">
                      <p className="text-muted-foreground">
                          Get premium server access with a secure PIN generated from our website for fast and private browsing anytime.
                      </p>
                  </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Premium Locations Card */}
            <AnimateOnScroll animation="slide-in-left">
              <Card className="bg-card/50 rounded-2xl border-border/50 shadow-xl shadow-primary/5 flex flex-col h-full">
                  <CardHeader className="p-8 text-center">
                      <Image
                          src="https://minograd.sirv.com/Frame%201321317475.png"
                          alt="Premium Server Locations"
                          data-ai-hint="vpn server locations"
                          width={376}
                          height={448}
                          className="rounded-lg shadow-md mb-6 mx-auto"
                      />
                      <h3 className="text-2xl font-bold font-headline">Premium Locations</h3>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow text-center">
                       <p className="text-muted-foreground">
                          Access Global Premium Servers Without Paying Extra and Enjoy Seamless Online Freedom with Zee VPN
                      </p>
                  </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Fast and Reliable Banner */}
      <section className="py-24 bg-primary/10">
        <AnimateOnScroll className="container text-center" animation="zoom-in">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
              Fast and Reliable Connection, Always.
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
              Our optimized network ensures you get the best speeds possible, whether you're streaming, gaming, or browsing.
            </p>
        </AnimateOnScroll>
      </section>

      {/* Premium/Unlimited */}
      <section id="pricing" className="py-28">
        <div className="container">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              Go Unlimited with Premium
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Unlock the full potential of Zee VPN with our premium plans.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {premiumTiers.map((tier, index) => (
              <AnimateOnScroll key={tier.name} animation="fade-in-down" delay={index * 150}>
                <Card className={`rounded-xl border-border/50 flex flex-col shadow-lg h-full ${tier.featured ? 'border-primary shadow-primary/20 scale-105' : 'hover:shadow-primary/20 hover:-translate-y-2 transition-all'}`}>
                  <CardHeader className="p-6">
                      {tier.featured && <Badge className="w-fit bg-primary text-primary-foreground mb-2">Most Popular</Badge>}
                      <CardTitle className="text-2xl font-bold font-headline">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                          <span className="text-4xl font-bold font-headline">${tier.price}</span>
                          <span className="text-muted-foreground">/month</span>
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-accent mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6">
                      <Button asChild size="lg" className={`w-full rounded-lg shadow-md ${tier.featured ? 'hover:shadow-primary/40' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'}`}>
                        <Link href="/get-pin">Get Started</Link>
                      </Button>
                  </CardFooter>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-card/30">
        <div className="container">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              Loved by Users Worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our users have to say.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in">
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full max-w-5xl mx-auto mt-16"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full rounded-xl bg-background shadow-lg hover:shadow-primary/20 transition-shadow">
                        <CardContent className="p-6 flex-grow">
                          <p className="text-muted-foreground">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardFooter className="p-6 border-t mt-auto">
                          <div className="flex items-center">
                            <Avatar>
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">{testimonial.handle}</div>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-28">
        <AnimateOnScroll className="container text-center" animation="zoom-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join millions of users who trust Zee VPN for their online security. Get your free PIN today and experience the difference.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-200 hover:scale-105 active:scale-100 shadow-lg hover:shadow-accent/40">
                <Link href="/get-pin">Try Zee VPN for Free</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

    </div>
  );
}
    
    

    







    
