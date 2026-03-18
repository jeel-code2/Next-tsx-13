import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Footer from '@/components/Footer'
import MouseGlow from '@/components/MouseGlow'
import LoadingScreen from '@/components/LoadingScreen'
import { cn } from "@/lib/utils";

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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
