'use client'

import { useState } from 'react'

export default function Search() {
	const [search, setSearch] = useState('')
	return (
		<input
			type='text'
			className='rounded-2xl w-full bg-slate-50 p-4 transition focus:outline-none focus:shadow-xl border'
			placeholder='Search your tasks or projects... Search anything!'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	)
}
