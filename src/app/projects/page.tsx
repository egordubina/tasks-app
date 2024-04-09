import TasksList from '../ui/tasks/TasksList'
import { fetchPinnedTasks, fetchTasks } from '../lib/data'

export default async function Projects() {
  const tasksData = fetchTasks()
  const pinnedTasksData = fetchPinnedTasks()
  const [tasks, pinnedTasks] = await Promise.all([tasksData, pinnedTasksData])
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row mx-2 sm:mx-0">
        <div className="h-fit w-full sm:w-6/12 bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned projects</h1>
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-slate-50 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
          <TasksList tasks={pinnedTasks} />
        </div>
      </div>
      <div className="h-fit w-full bg-slate-50 p-2 sm:p-4 rounded-xl sm:rounded-2xl mx-2 sm:mx-0">
        <h1 className="texl-2xl font-bold mb-2 sm:mb-4">All tasks</h1>
        <TasksList tasks={tasks} />
      </div>
    </section>
  )
}
