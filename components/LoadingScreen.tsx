"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Simulate initial load completion
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2000); // Wait for fade out animation

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] transition-opacity duration-500 ease-in-out",
        !isVisible && "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-sky-500/20 blur-[40px] rounded-full animate-pulse" />
          <span className="relative text-6xl font-black tracking-tighter text-sky-400 animate-in fade-in zoom-in duration-700">
            JEEL
          </span>
        </div>
        
        {/* Loading Progress Bar */}
        <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-sky-500 animate-progress origin-left" />
        </div>
        
        <p className="text-sky-400/60 text-xs uppercase tracking-[0.2em] animate-pulse">
          Initializing Convenience
        </p>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
