import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PinForm } from "./pin-form";
import { ListChecks, Download, Router, Play } from "lucide-react";

const steps = [
    {
        icon: ListChecks,
        name: "Check Eligibility",
        description: "Fill out the form to see if you qualify for a free PIN.",
    },
    {
        icon: Download,
        name: "Download App",
        description: "Get the Zee VPN app for your device from our download page.",
    },
    {
        icon: Router,
        name: "Enter PIN",
        description: "Launch the app and enter the PIN you receive.",
    },
    {
        icon: Play,
        name: "Start Browsing",
        description: "Enjoy 6 hours of secure and unrestricted internet access!",
    },
]

export default function GetPinPage() {
    return (
        <div className="container py-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Get Your Free 6-Hour PIN</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Follow the simple steps below to start your secure browsing experience with Zee VPN.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
                    {steps.map((step, index) => (
                        <div key={step.name} className="flex flex-col items-center text-center">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/20 text-primary mb-4">
                                <step.icon className="h-8 w-8"/>
                            </div>
                            <h3 className="font-bold font-headline text-lg">{index + 1}. {step.name}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>

                <Card className="max-w-2xl mx-auto rounded-xl shadow-2xl shadow-primary/10">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold font-headline">Free PIN Eligibility</CardTitle>
                        <CardDescription>
                            We will assess your eligibility for a free trial PIN based on your context.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PinForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
