'use client'

import type { NavItem } from '@/app/lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links: NavItem[] = [
  {
    title: 'Tasks',
    path: '/tasks',
  },
  {
    title: 'Settings',
    path: '/tasks/settings',
  },
  {
    title: 'Account',
    path: '/tasks/account',
  },
]

export default function NavBar() {
  const currentPath = usePathname()
  return (
    <nav className="w-screen flex justify-center bg-neutral-100 dark:bg-neutral-900 p-4">
      <div className="flex gap-10 w-full max-w-screen-xl justify-center">
        {links.map((item) => (
          <Link href={item.path} className={`${currentPath === item.path ? 'text-blue-600 dark:text-blue-400' : ''}`}>{item.title}</Link>
        ))}
      </div>
    </nav>
  )
}
