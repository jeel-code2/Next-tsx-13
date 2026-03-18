import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white">Get in Touch</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We are here to serve you. Reach out to JEEL Company Limited through any of our business channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6 text-sky-400" />,
                    title: "Call Us",
                    content: "+255 (0) 753 107 107",
                    sub: "Mon - Sat, 8am - 8pm"
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-sky-400" />,
                    title: "Email Us",
                    content: "info@jeel.co.tz",
                    sub: "Response within 24h"
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-sky-400" />,
                    title: "Our Location",
                    content: "Dodoma, 7th Road HQ",
                    sub: "Main Office Location"
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-sky-400" />,
                    title: "Work Hours",
                    content: "Open 6 Days a Week",
                    sub: "Emergency Service 24/7"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sky-400 font-medium">{item.content}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-3xl bg-sky-900/10 border border-sky-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="text-sky-400" />
                  Connect with Services
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
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-sky-400">
                    <option className="bg-slate-900">General Inquiry</option>
                    <option className="bg-slate-900">Pharmacy & Cosmetics</option>
                    <option className="bg-slate-900">Financial Agency</option>
                    <option className="bg-slate-900">Insurance Agency</option>
                    <option className="bg-slate-900">Tendering</option>
                    <option className="bg-slate-900">Home Supplies</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="How can we help you today?"></textarea>
                </div>
                <Button className="w-full bg-sky-500 hover:bg-sky-600 h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
