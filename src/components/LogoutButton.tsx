'use client'

import { SignOutButton } from '@clerk/nextjs'

export default function LogoutButton() {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        🔓 Se déconnecter
      </button>
    </SignOutButton>
  )
}
