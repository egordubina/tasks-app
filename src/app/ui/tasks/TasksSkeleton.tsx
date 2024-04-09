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
    <div className="rounded-2xl bg-neutral-200 p-4 w-100 flex justify-between" />
  )
}
