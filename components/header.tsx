"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full px-2 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image src="/favicon.ico" alt="sportpopulairefr" width={32} height={32} />
              <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-900 transition-colors uppercase">
                sportpopulairefr
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
