import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dave & Luce Solutions',
  description: 'Agence digitale avec IA intégrée',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
