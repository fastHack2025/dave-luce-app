'use client'

import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <Logo size={50} />
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} Dave & Luce Solutions. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
