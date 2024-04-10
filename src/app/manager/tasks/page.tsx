import Card from '@/app/ui/card/Card'
import NewTask from '@/app/ui/tasks/NewTask'
import TasksSkeleton from '@/app/ui/tasks/TasksSkeleton'
import { Suspense } from 'react'
import AllTasks from './components/AllTasks'

export default async function Tasks() {
  return (
    <section className="flex flex-col gap-10 mx-2 sm:mx-0">
      {/* <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
        </div>
      </div> */}
      <Card>
        <h1 className="texl-2xl font-bold">All tasks</h1>
        <NewTask />
        <Suspense fallback={<TasksSkeleton />}>
          <AllTasks />
        </Suspense>
      </Card>
      {/* <div className="h-fit w-full bg-neutral-50 shadow p-2 sm:p-4 rounded-xl sm:rounded-2xl gap-4 flex flex-col"> */}
        {/* <TasksList tasks={tasks} /> */}
      {/* </div> */}
    </section>
  )
}
