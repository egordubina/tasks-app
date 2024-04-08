'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NavItem } from '@/app/lib/types'

const links: NavItem[] = [
  {
    title: 'Profile',
    path: '/account',
  },
  {
    title: 'Settings',
    path: '/settings',
  },
  {
    title: 'Sign out',
    path: '/',
  },
]

export default function Profile() {
  const [showMenu, setShowMenu] = useState(false)
  const currentPath = usePathname()
  return (
    <div>
      <Image
        src="/people.jpg"
        alt=""
        width={60}
        height={60}
        className={`${
          showMenu ? 'rounded-t-2xl' : 'rounded-2xl'
        } cursor-pointer transition-all`}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="bg-neutral-100 rounded-b-2xl rounded-s-2xl absolute end-2 sm:end-0 md:end-[16px] p-1 shadow-xl flex flex-col z-50 w-60">
          <div className="p-4">
            <h1 className="text-center w-full text-lg font-bold">Mi Joon</h1>
            <p className="text-center text-sm w-full text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                href={link.path}
                className={`cursor-pointer rounded-xl hover:bg-neutral-200 transition-all p-2 md:p-3 ${
                  currentPath === link.path
                    ? 'dark:bg-blue-800 dark:text-blue-100 bg-blue-100 text-blue-600'
                    : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
