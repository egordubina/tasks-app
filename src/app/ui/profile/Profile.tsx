'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NavItem } from '@/app/lib/types'
import UserInfo from './UserInfo'
import UserInfoSkeleton from './UserInfoSkeleton'
import { useOutside } from '@/app/lib/hooks/useOutside'

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
	const currentPath = usePathname()
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<div ref={ref}>
			<Image
				src='/people.jpg'
				alt=''
				width={60}
				height={60}
				className={`${
					isShow ? 'rounded-t-2xl' : 'rounded-2xl'
				} cursor-pointer transition-all`}
				onClick={() => setIsShow(!isShow)}
			/>
			{isShow && (
				<div
					className={`${
						isShow ? 'block' : 'hidden'
					} bg-slate-50 rounded-b-2xl rounded-s-2xl absolute end-2 sm:end-0 md:end-[16px] p-1 shadow-xl flex flex-col z-50 w-60`}
				>
					<div className='p-4'>
						<Suspense fallback={<UserInfoSkeleton />}>
							<UserInfo />
						</Suspense>
					</div>
					<div className='flex flex-col'>
						{links.map((link) => (
							<Link
								href={link.path}
								className={`cursor-pointer rounded-xl hover:bg-neutral-200 transition-all p-2 md:p-3 ${
									currentPath === link.path ? 'bg-blue-100 text-blue-600' : ''
								}`}
								onClick={() => setIsShow(false)}
								key={link.path}
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
