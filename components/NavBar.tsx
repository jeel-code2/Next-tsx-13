"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contacts", href: "#contacts" },
  ];

  const UnderlineEffect = "absolute -bottom-1 left-4 right-4 h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="flex w-full h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link href="#home" className="flex items-center space-x-2 shrink-0">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-sky-400">
              JEEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="group relative px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
                <span className={UnderlineEffect} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="/coming-soon" 
            className="group relative hidden md:flex text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 transition-colors"
          >
            Staff Login
            <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          
          <Link 
            href="#contacts" 
            className="hidden md:flex items-center justify-center px-8 py-3 rounded-xl border border-sky-400/50 text-sky-400 font-bold hover:bg-sky-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)]"
          >
            Get In Touch
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white bg-white/5 hover:bg-white/10 rounded-full h-11 w-11 shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950/95 backdrop-blur-xl border-l border-white/10 text-white w-[280px] sm:w-[350px] p-6">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-sky-400 text-xl font-black">MENU</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-2xl font-bold text-gray-400 hover:text-sky-400 transition-all font-sans"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-white/5 my-2" />
                <Link 
                  href="/coming-soon" 
                  className="text-lg font-medium text-gray-500 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Staff Login
                </Link>
                <Link 
                  href="#contacts" 
                  className="mt-6 w-full py-4 text-center rounded-xl bg-sky-500 text-white font-black text-base shadow-lg shadow-sky-500/20"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
