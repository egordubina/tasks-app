'use client'

import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  return (
    <input
      type="text"
      className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-4 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-900 transition mx-2 sm:mx-0"
      placeholder="Search your tasks or projects... Search anything!"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
