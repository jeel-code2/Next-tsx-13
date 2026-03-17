"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-sky-400">
              JEEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:scale-105 transition-transform")}>
                  <Link href="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:scale-105 transition-transform")}>
                  <Link href="/services">
                    Our Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:scale-105 transition-transform")}>
                  <Link href="/about">
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:scale-105 transition-transform")}>
                  <Link href="/contacts">
                    Contacts
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex text-gray-300 hover:text-white" asChild>
            <Link href="/login">Staff Login</Link>
          </Button>
          <Button className="hidden md:flex bg-sky-500 hover:bg-sky-600 font-bold" asChild>
            <Link href="/contacts">Get In Touch</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border/40">
              <SheetHeader>
                <SheetTitle className="text-sky-400">JEEL Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-sky-400 transition-colors">Home</Link>
                <Link href="/about" className="text-lg font-medium hover:text-sky-400 transition-colors">About Us</Link>
                <Link href="/services" className="text-lg font-medium hover:text-sky-400 transition-colors">Our Services</Link>
                <Link href="/contacts" className="text-lg font-medium hover:text-sky-400 transition-colors">Contacts</Link>
                <hr className="border-border/40" />
                <Link href="/login" className="text-lg font-medium text-muted-foreground hover:text-sky-400 transition-colors">Staff Login</Link>
                <Button className="mt-4 bg-sky-500 hover:bg-sky-600 font-bold" asChild>
                  <Link href="/contacts">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
