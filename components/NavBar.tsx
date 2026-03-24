"use client";

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
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contacts", href: "#contacts" },
  ];

  const UnderlineEffect = "absolute -bottom-1 left-4 right-4 h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container flex h-20 items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link href="#home" className="flex items-center space-x-2">
            <span className="text-3xl font-black tracking-tighter text-sky-400">
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

        <div className="flex items-center gap-6">
          <Link 
            href="/login" 
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white bg-white/5 hover:bg-white/10 rounded-full h-12 w-12">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950/95 backdrop-blur-xl border-l border-white/10 text-white w-full sm:max-w-md">
              <SheetHeader className="text-left">
                <SheetTitle className="text-sky-400 text-2xl font-black">JEEL MENU</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8 mt-16">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-3xl font-bold text-gray-400 hover:text-sky-400 transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-white/5 my-4" />
                <Link href="/login" className="text-xl font-medium text-gray-500 hover:text-white">Staff Login</Link>
                <Link 
                  href="#contacts" 
                  className="mt-8 w-full py-5 text-center rounded-2xl bg-sky-500 text-white font-black text-lg shadow-lg shadow-sky-500/20"
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
