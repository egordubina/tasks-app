'use client'

import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  return (
    <input
      type="text"
      className="rounded-2xl w-full bg-neutral-100 dark:bg-neutral-800 p-4 transition"
      placeholder="Search your tasks or projects... Search anything!"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
