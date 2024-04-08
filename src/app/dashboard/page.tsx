import { fetchTasks, fetchPinnedTasks } from '@/app/lib/data'
import TasksList from '../ui/tasks/TasksList'

export default async function Dashboard() {
  const tasksData = fetchTasks()
  const pinnedTasksData = fetchPinnedTasks()
  const [tasks, pinnedTasks] = await Promise.all([tasksData, pinnedTasksData])
  return (
    <section className="flex flex-col gap-10 mx-2 sm:mx-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Your productivity</h1>
        <div className="flex gap-2 sm:gap-4">
          <div className="bg-neutral-100 p-4 rounded-2xl w-1/2 md:w-1/4">
            You have {tasks.length} tasks now
          </div>
          <div className="bg-neutral-100 p-4 rounded-2xl w-1/2 md:w-1/4">
            Your complete {tasks.filter((item) => item.done).length} tasks today
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned projects</h1>
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 dark:bg-neutral-900 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
          <TasksList tasks={pinnedTasks} />
        </div>
      </div>
      <div className="h-fit w-full bg-neutral-100 dark:bg-neutral-900 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
        <h1 className="texl-2xl font-bold mb-2 sm:mb-4">All tasks</h1>
        <TasksList tasks={tasks} />
      </div>
    </section>
  )
}
