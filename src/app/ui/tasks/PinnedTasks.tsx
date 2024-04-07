'use client'

import { useState } from 'react'
import { Suspense } from 'react'
import TasksSkeleton from '@/app/ui/tasks/TasksSkeleton'
import PinnedTasksList from '@/app/ui/tasks/PinnedTasksList'

export default function PinnedTasks() {
  const [isShowPinnedTasks, setShowPinnedTasks] = useState(true)
  return (
    <div className="flex flex-col gap-4 h-fit">
      <h1
        className="texl-2xl font-bold hover:cursor-pointer"
        onClick={() => setShowPinnedTasks(!isShowPinnedTasks)}
      >
        Pinned tasks
      </h1>
      {isShowPinnedTasks && (
        <Suspense fallback={<TasksSkeleton />}>
          <PinnedTasksList />
        </Suspense>
      )}
    </div>
  )
}
