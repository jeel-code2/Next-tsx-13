import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Zap, Shield, Globe, CheckCircle2, Home, ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Pharmacy and Cosmetics",
      description: "Providing high-quality pharmaceutical products and premium cosmetics. We focus on your health and beauty with authenticated brands.",
      icon: <Zap className="h-12 w-12 text-sky-400" />
    },
    {
      title: "Financial Service Agency",
      description: "Our agency offers mobile banking services, mobile money, and simplified financial transactions for your convenience.",
      icon: <Shield className="h-12 w-12 text-sky-400" />
    },
    {
      title: "Insurance Agency",
      description: "Professional insurance consultancy and coverage plans to protect what matters most to you and your family.",
      icon: <Globe className="h-12 w-12 text-sky-400" />
    },
    {
      title: "Tendering",
      description: "Expert bid management and procurement services for businesses looking to secure valuable opportunities.",
      icon: <CheckCircle2 className="h-12 w-12 text-sky-400" />
    },
    {
      title: "Service and Supplies Shop",
      description: "Your home for essential home supplies and neighborhood services, delivered with the signature JEEL quality.",
      icon: <Home className="h-12 w-12 text-sky-400" />
    },
    {
      title: "More Services",
      description: "We are expanding! New specialized solutions and community-focused services are coming to JEEL soon.",
      icon: <Plus className="h-12 w-12 text-sky-400" />,
      isComingSoon: true
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white">Our Services</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Service at your Convenience (Furahia Huduma). Explore the diverse sectors where JEEL Company Limited makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceList.map((service, index) => (
              <div key={index} className={cn(
                "p-10 rounded-3xl backdrop-blur-md transition-all group",
                service.isComingSoon 
                  ? "border border-dashed border-white/20 bg-transparent opacity-60" 
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              )}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                      {service.isComingSoon && (
                        <span className="ml-4 text-xs uppercase tracking-widest bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full">Coming Soon</span>
                      )}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-sky-500/20 to-blue-600/20 border border-sky-500/30 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Specialized Solution?</h2>
            <p className="text-sky-100/70 mb-8 text-lg">
              Our team is ready to assist you with customized services tailored for your specific requirements.
            </p>
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 px-10 h-14 text-lg font-bold rounded-xl" asChild>
              <Link href="/contacts">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
