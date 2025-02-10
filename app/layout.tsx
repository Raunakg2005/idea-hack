import type { Metadata } from 'next'
import './globals.css'
import { ParticleBackground } from "@/components/particle-background"
import { Inter } from 'next/font/google'
import Footer  from "@/components/layout/footer"
import { ThemeProvider } from 'next-themes'
import Navbar  from '@/components/layout/navbar'
import type React from "react"

export const metadata: Metadata = {
  title: 'DontCare',
  description: 'Secure banking for the digital age',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col max-w-7xl mx-auto">
            <Navbar />
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <ParticleBackground />
            </div>
            <main className="flex-1 relative z-10 mt-16 pointer-events-auto px-4">
              {children}
            </main>
            <Footer className="relative z-20 bg-white pointer-events-auto" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
