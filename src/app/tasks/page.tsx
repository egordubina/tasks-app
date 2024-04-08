import TasksList from '../ui/tasks/TasksList'
import TasksSkeleton from '../ui/tasks/TasksSkeleton'
import { Suspense } from 'react'
// import PinnedTasks from '@/app/ui/tasks/PinnedTasks'
import Search from '../ui/Search'
import { fetchPinnedTasks, fetchTasks } from '../lib/data'

export default async function Tasks() {
  const tasksData = fetchTasks()
  const pinnedTasksData = fetchPinnedTasks()
  const [tasks, pinnedTasks] = await Promise.all([tasksData, pinnedTasksData])
  return (
    <section className="flex flex-col gap-8">
      <Search /> 
      <div className="flex flex-col justify-between gap-4 sm:flex-row mx-2 sm:mx-0">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-2xl">
          <h1 className="texl-2xl font-bold">Pinned projects</h1>
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 dark:bg-neutral-900 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          {/* <PinnedTasks /> */}
          <TasksList tasks={pinnedTasks}/>
        </div>
      </div>
      <div className="mx-2 sm:mx-0">
        <h1 className="text-2xl font-bold mb-4">All tasks</h1>
        {/* <Suspense fallback={<TasksSkeleton />}> */}
          <TasksList tasks={tasks} />
        {/* </Suspense> */}
      </div>
    </section>
  )
}
