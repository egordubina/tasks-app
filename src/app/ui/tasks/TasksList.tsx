import { Task } from '../../lib/types'
import TaskItem from './TaskItem'

export default function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="flex flex-col gap-2 h-fit">
      {tasks.length > 0 && tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
      {tasks.length == 0 && <p>No tasks</p>}
    </div>
  )
}
