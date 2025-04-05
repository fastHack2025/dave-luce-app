import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Logo from './Logo'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo size={50} />
        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>

          <SignedOut>
            <li><Link href="/sign-in">Connexion</Link></li>
          </SignedOut>

          <SignedIn>
            <li><UserButton afterSignOutUrl="/sign-in" /></li>
          </SignedIn>
        </ul>
      </nav>
    </header>
  )
}
