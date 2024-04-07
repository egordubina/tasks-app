import TasksList from '@/app/ui/tasks/TasksList'
import TasksSkeleton from '@/app/ui/tasks/TasksSkeleton'
import { Suspense } from 'react'
import PinnedTasks from '../ui/tasks/PinnedTasks'

export default function Tasks() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-4 rounded-2xl">
          <h1 className="texl-2xl font-bold">Pinned projects</h1>
        </div>
        <div className="w-full sm:w-6/12 bg-neutral-100 p-4 rounded-2xl">
          <PinnedTasks />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">All tasks</h1>
        <Suspense fallback={<TasksSkeleton />}>
          <TasksList />
        </Suspense>
      </div>
    </section>
  )
}
