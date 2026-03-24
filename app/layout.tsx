import NavBarWrapper from '@/components/NavBarWrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Footer from '@/components/Footer'
import MouseGlow from '@/components/MouseGlow'
import LoadingScreen from '@/components/LoadingScreen'
import { cn } from "@/lib/utils";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Jeel Company Limited',
  description: 'Furahia Huduma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)} suppressHydrationWarning>
      <body className={cn(geist.className, "bg-background text-foreground")} suppressHydrationWarning>
        <LoadingScreen />
        <MouseGlow />
        <NavBarWrapper />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
