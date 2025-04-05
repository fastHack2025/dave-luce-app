'use client'

import Link from 'next/link'
import Logo from './Logo'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo size={48} />

        <ul className="flex items-center gap-6 text-gray-700 text-sm font-medium">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>

          {/* 👤 Connexion / Déconnexion */}
          <SignedOut>
            <li>
              <Link
                href="/sign-in"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Connexion
              </Link>
            </li>
          </SignedOut>

          <SignedIn>
            <li>
              <UserButton afterSignOutUrl="/sign-in" />
            </li>
          </SignedIn>
        </ul>
      </nav>
    </header>
  )
}
