import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { 
  ArrowRight, CheckCircle2, Globe, Plus, Shield, Zap, 
  Award, Users, Target, Phone, Mail, MapPin, Clock, MessageSquare, Home as HomeIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const serviceList = [
    {
      title: "Pharmacy & Cosmetics",
      description: "Quality healthcare products and premium cosmetics. We ensure your well-being with authenticated pharmaceutical supplies.",
      icon: <Zap className="h-10 w-10 text-sky-400" />,
      link: "/coming-soon"
    },
    {
      title: "Financial Service Agency",
      description: "Your trusted partner for agency banking, mobile money, and simplified financial transactions.",
      icon: <Globe className="h-10 w-10 text-sky-400" />,
      link: "/coming-soon"
    },
    {
      title: "Insurance Agency",
      description: "Comprehensive insurance consultancy and coverage designs to safeguard your future and assets.",
      icon: <Shield className="h-10 w-10 text-sky-400" />,
      link: "/coming-soon"
    },
    {
      title: "Tendering",
      description: "Expert procurement and bid management services, connecting your business to the right opportunities.",
      icon: <CheckCircle2 className="h-10 w-10 text-sky-400" />,
      link: "/coming-soon"
    },
    {
      title: "Service & Supplies Shop",
      description: "A one-stop shop for essential home supplies and neighborhood services at your convenience.",
      icon: <HomeIcon className="h-10 w-10 text-sky-400" />,
      link: "/coming-soon"
    },
    {
      title: "More to Come",
      description: "We are constantly expanding our portfolio to bring even more essential services to your doorstep soon.",
      icon: <Plus className="h-10 w-10 text-sky-400" />,
      isComingSoon: true
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 min-h-screen flex items-center justify-center max-w-7xl pt-20">
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
                <Link href="#services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-white/10 hover:bg-white/5 transition-all text-white" asChild>
                <Link href="#about">Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-black/50 border-y border-white/5 backdrop-blur-sm py-24">
          <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Diverse Business Sectors</h2>
            <p className="text-gray-400">Comprehensive solutions tailored to meet your daily needs.</p>
          </div>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceList.map((feature, i) => (
                <div key={i} className={cn(
                  "group relative p-8 rounded-2xl border transition-all hover:-translate-y-1 overflow-hidden",
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
                  <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  
                  {!feature.isComingSoon && (
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent text-center">
                      <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl" asChild>
                        <Link href={feature.link || "#"}>
                          Explore <Globe className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-32 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-none text-sky-400 bg-sky-400/10 ring-1 ring-inset ring-sky-400/20">
                Established for Excellence
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                About <span className="text-sky-400">JEEL Company</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded on the principle of accessibility, JEEL Company Limited has grown into a multi-service powerhouse. Our slogan, <strong className="text-white">"Service at your Convenience"</strong>, drives everything we do.
              </p>
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-sky-400" />
                One-Stop Service Convenience
              </div>
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-sky-400" />
                Verified Quality Standards
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-sky-500/10 blur-[100px] rounded-full group-hover:bg-sky-500/20 transition-all duration-700" />
                <div className="text-8xl font-black text-sky-400/30 selection:bg-transparent cursor-default animate-pulse">
                  JEEL
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 text-sky-400" />,
                title: "Our Mission",
                description: "To deliver essential services with unparalleled convenience and integrity across all sectors."
              },
              {
                icon: <Users className="h-10 w-10 text-sky-400" />,
                title: "Our Vision",
                description: "To be the most trusted household name for multi-service solutions in the country."
              },
              {
                icon: <Award className="h-10 w-10 text-sky-400" />,
                title: "Our Values",
                description: "Integrity, Customer Excellence, and Innovation are the pillars of our operations."
              }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed italic">"{card.description}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="bg-black/50 border-y border-white/5 backdrop-blur-sm py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white">Get in Touch</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We are here to serve you. Reach out through any of our channels.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Phone className="h-6 w-6 text-sky-400" />,
                      title: "Call Us",
                      content: "+255 (0) 753 107 107"
                    },
                    {
                      icon: <Mail className="h-6 w-6 text-sky-400" />,
                      title: "Email Us",
                      content: "info@jeel.co.tz"
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-sky-400" />,
                      title: "Our Location",
                      content: "Dodoma, 7th Road HQ"
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-sky-400" />,
                      title: "Work Hours",
                      content: "Open 6 Days a Week"
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sky-400 font-medium">{item.content}</p>
                    </div>
                  ))}
                </div>

                <div className="p-10 rounded-3xl bg-sky-900/10 border border-sky-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MessageSquare className="text-sky-400" />
                    Specialized Inquiries
                  </h3>
                  <ul className="space-y-4 text-gray-400">
                    <li><strong>Pharmacy:</strong> pharma@jeelimited.co.tz</li>
                    <li><strong>Finance:</strong> finance@jeelimited.co.tz</li>
                    <li><strong>Tendering:</strong> tenders@jeelimited.co.tz</li>
                  </ul>
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Your Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="How can we help you today?"></textarea>
                  </div>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-32 max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-r from-sky-900/40 to-blue-900/40 border border-sky-500/20 p-12 md:p-24 text-center space-y-8 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to start your journey?</h2>
            <p className="text-sky-100/70 text-lg max-w-xl mx-auto">
              Join thousands of families and businesses that trust JEEL for their daily essential needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold h-14 px-10 rounded-xl" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 h-14 px-10 rounded-xl border border-white/10" asChild>
                <Link href="#contacts">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}