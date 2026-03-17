import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowRight, CheckCircle2, Globe, Plus, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-12 pb-32 md:pt-24 md:pb-52 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-none text-sky-400 bg-sky-400/10 ring-1 ring-inset ring-sky-400/20 animate-pulse">
              New: Software Enterprise Solutions Available
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
              Service At Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Convenience</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              <span className="text-sky-400/80">Furahia Huduma</span>. <br className="hidden md:block" />
              JEEL Company Limited is a multi-sector powerhouse dedicated to bringing essential services closer to you through innovation and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-bold h-14 px-8 text-lg rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all" asChild>
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-white/10 hover:bg-white/5 transition-all text-white" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Multi-Service Grid */}
        <section className="bg-black/50 border-y border-white/5 backdrop-blur-sm py-24">
          <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Diverse Business Sectors</h2>
            <p className="text-gray-400">Comprehensive solutions tailored to meet your daily needs.</p>
          </div>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-10 w-10 text-sky-400" />,
                  title: "Pharmacy & Cosmetics",
                  description: "Quality healthcare products and premium cosmetics. We ensure your well-being with authenticated pharmaceutical supplies."
                },
                {
                  icon: <Globe className="h-10 w-10 text-sky-400" />,
                  title: "Financial Service Agency",
                  description: "Your trusted partner for agency banking, mobile money, and simplified financial transactions."
                },
                {
                  icon: <Shield className="h-10 w-10 text-sky-400" />,
                  title: "Insurance Agency",
                  description: "Comprehensive insurance consultancy and coverage designs to safeguard your future and assets."
                },
                {
                  icon: <CheckCircle2 className="h-10 w-10 text-sky-400" />,
                  title: "Tendering",
                  description: "Expert procurement and bid management services, connecting your business to the right opportunities."
                },
                {
                  icon: <Zap className="h-10 w-10 text-sky-400" />,
                  title: "Service & Supplies Shop",
                  description: "A one-stop shop for essential home supplies and neighborhood services at your convenience."
                },
                {
                  icon: <Plus className="h-10 w-10 text-sky-400" />,
                  title: "More to Come",
                  description: "We are constantly expanding our portfolio to bring even more essential services to your doorstep soon.",
                  isComingSoon: true
                }
              ].map((feature, i) => (
                <div key={i} className={cn(
                  "group p-8 rounded-2xl border transition-all hover:-translate-y-1",
                  feature.isComingSoon 
                    ? "border-dashed border-white/20 bg-transparent opacity-60" 
                    : "border-white/5 bg-white/5 hover:bg-white/10"
                )}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                    {feature.isComingSoon && (
                      <span className="ml-3 text-[10px] uppercase tracking-widest bg-sky-500/20 text-sky-400 px-2 py-1 rounded-md">Soon</span>
                    )}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="container mx-auto px-4 py-32 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Why JEEL Company is the <br />
                <span className="text-sky-400">Right Choice for You</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                As a multi-service pioneer, we simplify your life by consolidating essential services under one trusted brand. 
              </p>
              <ul className="space-y-4">
                {[
                  "One-Stop Service Convenience",
                  "Verified Quality Standards",
                  "Accessible Community Locations",
                  "Integrity-Driven Financial Services"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="h-5 w-5 text-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center p-8 overflow-hidden group">
                 <div className="absolute inset-0 bg-sky-500/10 blur-[100px] rounded-full group-hover:bg-sky-500/20 transition-all duration-700" />
                 <div className="text-8xl font-black text-sky-400/30 selection:bg-transparent cursor-default animate-pulse">
                    JEEL
                 </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-32 max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-r from-sky-900/40 to-blue-900/40 border border-sky-500/20 p-12 md:p-24 text-center space-y-8 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to start your journey?</h2>
            <p className="text-sky-100/70 text-lg max-w-xl mx-auto">
              Join thousands of families and businesses that trust JEEL for their daily essential needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold h-14 px-10 rounded-xl" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 h-14 px-10 rounded-xl border border-white/10" asChild>
                <Link href="/contacts">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}