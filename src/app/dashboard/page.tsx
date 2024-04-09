import { fetchTasks, fetchPinnedTasks, fetchProjects, fetchUserById } from '@/app/lib/data'
import TasksList from '../ui/tasks/TasksList'

export default async function Dashboard() {
  const tasksData = fetchTasks()
  const pinnedTasksData = fetchPinnedTasks()
  const projectsData = fetchProjects()
  const userData = fetchUserById(0)
  const [tasks, pinnedTasks, projects, user] = await Promise.all([
    tasksData,
    pinnedTasksData,
    projectsData,
    userData
  ])
  return (
    <section className="flex flex-col gap-10 mx-2 sm:mx-0">
      <div className="flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>Welcome, {user.name}</h1>
        <h1 className="text-xl font-bold">Your productivity</h1>
        <div className="flex gap-2 sm:gap-4">
          <div className="bg-neutral-50 shadow p-4 rounded-2xl w-1/2 md:w-1/4">
            You have {tasks.length} tasks now
          </div>
          <div className="bg-neutral-50 shadow p-4 rounded-2xl w-1/2 md:w-1/4">
            Your complete {tasks.filter((item) => item.done).length} tasks today
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="h-fit w-full sm:w-6/12 bg-neutral-50 shadow p-3 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned projects</h1>
          {projects.map((project) => (
            <div>
              <p>{project.name}</p>
              <p>{project.tasksIds.length} tasks</p>
              <p>{project.usersIds.length} peoples</p>
            </div>
          ))}
        </div>
        <div className="h-fit w-full sm:w-6/12 bg-neutral-50 shadow p-2 sm:p-4 rounded-xl sm:rounded-2xl">
          <h1 className="texl-2xl font-bold mb-2 sm:mb-4">Pinned tasks</h1>
          <TasksList tasks={pinnedTasks} />
        </div>
      </div>
      <div className="h-fit w-full bg-neutral-50 shadow p-2 sm:p-4 rounded-xl sm:rounded-2xl">
        <h1 className="texl-2xl font-bold mb-2 sm:mb-4">All tasks</h1>
        <TasksList tasks={tasks} />
      </div>
    </section>
  )
}
