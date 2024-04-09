'use client'

import { useState } from 'react'

export default function NewTask() {
  const [task, setTask] = useState('')

  return (
    <input
      type="text"
      className="p-4 rounded-2xl w-full"
      placeholder="Just start typing"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  )
}
