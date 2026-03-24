"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowLeft, Rocket, Clock, MessageSquare } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <AnimatedBackground />

      {/* Top Right Back Button */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm md:text-base font-bold hover:bg-white/10 transition-all backdrop-blur-md"
        >
          <ArrowLeft className="h-4 w-4" /> 
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </Link>
      </div>
      
      <main className="relative z-10 w-full max-w-7xl px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold leading-none text-sky-400 bg-sky-400/10 ring-1 ring-inset ring-sky-400/20 animate-pulse">
            <Rocket className="w-4 h-4 mr-2" />
            Under Construction
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Exciting Things <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Are Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
              We're working hard to bring you a seamless digital experience for this service. Stay tuned for the official launch!
            </p>
          </div>

          {/* Feature Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Launch Countdown</h3>
              <p className="text-gray-400 text-sm">Final optimizations in progress. We expect to be live very shortly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Get Notified</h3>
              <p className="text-gray-400 text-sm">Follow us on social media or contact us to be the first to know.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 font-bold h-14 px-10 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)]" asChild>
              <Link href="/#contacts">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full -z-1" />
    </div>
  );
}
