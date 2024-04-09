'use client'

import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  return (
    <input
      type="text"
      className="rounded-2xl w-full bg-slate-50 shadow p-4 transition"
      placeholder="Search your tasks or projects... Search anything!"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
