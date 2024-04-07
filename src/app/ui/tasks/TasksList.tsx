import { fetchTasks } from '@/app/lib/data'
import TaskItem from '@/app/ui/tasks/TaskItem'

export default async function TasksList() {
  const tasks = await fetchTasks()
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  )
}
