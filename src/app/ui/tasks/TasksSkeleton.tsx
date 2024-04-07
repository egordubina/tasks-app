export default function TasksSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
    </div>
  )
}

function TaskSkeleton() {
  return (
    <div className="rounded-2xl bg-neutral-200 p-4 w-100 flex justify-between">
      <div className="w-full flex flex-col gap-3">
        <div className="rounded-2xl bg-neutral-300 p-3 w-2/3"></div>
        <div className="rounded-2xl bg-neutral-300 p-2 w-1/2"></div>
      </div>
    </div>
  )
}
