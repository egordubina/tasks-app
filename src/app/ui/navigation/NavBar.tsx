'use client'

import type { NavItem } from '@/app/lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/manager/dashboard',
  },
  {
    title: 'Tasks',
    path: '/manager/tasks',
  },
  {
    title: 'Projects',
    path: '/manager/projects',
  },
]

export default function NavBar() {
  const currentPath = usePathname()
  return (
    <nav className="w-full flex p-1 sm:p-2 bg-slate-50 rounded-b-2xl md:rounded-2xl md:w-1/6 md:h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex md:flex-col md:w-full">
        {links.map((item) => (
          <Link
            href={item.path}
            className={`p-2 md:p-4 rounded-2xl transition-all ${
              currentPath === item.path
                ? 'bg-blue-100 text-blue-600'
                : 'md:hover:bg-neutral-200'
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
