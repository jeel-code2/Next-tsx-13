import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-none text-sky-400 bg-sky-400/10 ring-1 ring-inset ring-sky-400/20">
                Established for Excellence
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                About <span className="text-sky-400">JEEL Company Limited</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded on the principle of accessibility, JEEL Company Limited has grown into a multi-service powerhouse in the region. Our slogan, <strong className="text-white">"Service at your Convenience (Furahia Huduma)"</strong>, drives everything we do.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe that essential services—whether healthcare, financial, or home supplies—should be within reach of every community member. Our diverse business sectors work in harmony to provide a seamless experience for our customers.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-sky-500/5 blur-[80px] rounded-full" />
                <div className="text-6xl font-black text-sky-400/20">OUR STORY</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <Target className="h-10 w-10 text-sky-400" />,
                title: "Our Mission",
                description: "To deliver essential services with unparalleled convenience and integrity across all our business sectors."
              },
              {
                icon: <Users className="h-10 w-10 text-sky-400" />,
                title: "Our Vision",
                description: "To be the most trusted household name for multi-service solutions in the country and beyond."
              },
              {
                icon: <Award className="h-10 w-10 text-sky-400" />,
                title: "Our Values",
                description: "Integrity, Customer Excellence, and Innovation are the pillars that support our daily operations."
              }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed italic">"{card.description}"</p>
              </div>
            ))}
          </div>

          <div className="p-12 md:p-20 rounded-3xl bg-sky-900/20 border border-sky-500/20 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Commitment to the Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Locally Owned & Operated",
                "Community-Focused Financial Services",
                "Standardized Phramaceutical Care",
                "Transparent Tendering Processes",
                "Responsive Home Service Delivery",
                "Dedicated Customer Support Team"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="h-6 w-6 text-sky-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meet The Team Section */}
          <div className="mt-32 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Meet Our <span className="text-sky-400">Leadership Team</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                The visionary minds behind JEEL Company Limited, dedicated to delivering service at your convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { name: "Executive Director", post: "Strategy & Vision" },
                { name: "Operations Manager", post: "Service Delivery" },
                { name: "Finance Director", post: "Fiscal Management" },
                { name: "Head of Pharmacy", post: "Healthcare Oversight" },
              ].map((member, i) => (
                <div key={i} className="group text-center space-y-6">
                  <div className="relative aspect-square mx-auto w-full max-w-[240px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-sky-500/50 transition-all duration-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-sky-500/5 blur-2xl group-hover:bg-sky-500/10 transition-colors" />
                    <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Users className="h-10 w-10 text-sky-400/40" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{member.name}</h3>
                    <p className="text-sky-400/80 font-medium text-sm tracking-widest uppercase">{member.post}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
