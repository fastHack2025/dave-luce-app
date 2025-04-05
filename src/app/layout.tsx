import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/config/next-seo.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dave & Luce Solutions',
  description: 'Solutions digitales IA, CRM, web, formations et plus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
          <DefaultSeo {...SEO} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
