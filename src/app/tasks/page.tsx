import TasksList from '../ui/tasks/TasksList'
import { fetchPinnedTasks, fetchTasks } from '../lib/data'
import NewTask from '../ui/tasks/NewTask'

export default async function Tasks() {
  const tasksData = fetchTasks()
  const pinnedTasksData = fetchPinnedTasks()
  const [tasks, pinnedTasks] = await Promise.all([tasksData, pinnedTasksData])
  return (
    <section className="flex flex-col gap-10 mx-2 sm:mx-0">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned projects</h1>
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
          <TasksList tasks={pinnedTasks} />
        </div>
      </div>
      <div className="h-fit w-full bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl gap-4 flex flex-col">
        <h1 className="texl-2xl font-bold">All tasks</h1>
        <NewTask />
        <TasksList tasks={tasks} />
      </div>
    </section>
  )
}
