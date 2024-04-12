'use client'

import { useOutside } from '@/app/lib/hooks/useOutside'
import { useState } from 'react'

export default function SingleSelect({
	value,
	data,
	onItemClick
}: {
	value: string
	data: string[],
	onItemClick: (item: string) => void
}) {
	const [select, setSelect] = useState(value)
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<div>
			<p
				className='cursor-pointer'
				ref={ref}
				onClick={() => {
					setIsShow(true)
				}}
			>
				{select}
			</p>
			{isShow && (
				<div className='absolute flex flex-col gap-2 bg-neutral-100 shadow-xl rounded-xl'>
					{data.map((item) => (
						<p className='hover:bg-neutral-200 cursor-pointer transition-all py-2 px-4' onClick={() => { onItemClick(item) }}>
							{item}
						</p>
					))}
				</div>
			)}
		</div>
	)
}
