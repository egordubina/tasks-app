import TasksSkeleton from '@/app/ui/tasks/TasksSkeleton'

export default function Loading() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row mx-2 sm:mx-0">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned projects</h1>
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
          <TasksSkeleton />
        </div>
      </div>
      <div className="h-fit w-full bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">All tasks</h1>
        <TasksSkeleton />
      </div>
    </section>
  )
}
