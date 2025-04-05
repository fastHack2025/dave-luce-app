'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ size = 80 }: { size?: number }) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="https://res.cloudinary.com/dko5sommz/image/upload/v1743812649/logo_rblwxd.png"
        alt="Logo Dave & Luce"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </Link>
  )
}
