'use client'

import type { NavItem } from '../../lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: 'Tasks',
    path: '/tasks',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Settings',
    path: '/settings',
  },
  {
    title: 'Account',
    path: '/account',
  },
]

export default function NavBar() {
  const currentPath = usePathname()
  return (
    <nav className="w-full flex p-2 bg-neutral-100 dark:bg-neutral-800 rounded-2xl md:w-1/6 md:h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex md:flex-col md:w-full">
        {links.map((item) => (
          <Link
            href={item.path}
            className={`p-4 rounded-2xl transition-all ${
              currentPath === item.path
                ? 'dark:bg-blue-800 dark:text-blue-100 bg-blue-100 text-blue-600'
                : 'md:dark:hover:bg-blue-900 md:dark:hover:text-blue-100 md:hover:bg-neutral-200'
            }`}
            key={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
