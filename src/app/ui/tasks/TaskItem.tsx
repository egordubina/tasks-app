import { TaskPriority, TaskStatus, type Task } from '../../lib/types'
import { clsx } from 'clsx'

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl bg-neutral-100 border p-2 sm:p-4 flex justify-between items-center cursor-pointer"
    >
        <h6 className="text-lg font-bold">{task.title}</h6>
        <p
          className={clsx('text-xs p-2 rounded-xl', {
            'bg-neutral-300 text-neutral-900': task.status === TaskStatus.Backlog,
            'bg-blue-100 text-blue-900': task.status === TaskStatus.InProgress,
            'bg-green-200 text-green-900': task.status === TaskStatus.Finished,
          })}
        >
          {task.status}
        </p>
        <p
          className={clsx('text-xs p-2 rounded-xl', {
            'bg-green-200 text-green-900':
              task.priority === TaskPriority.Low,
            'bg-orange-100 text-orange-900': task.priority === TaskPriority.Medium,
            'bg-red-100 text-red-900': task.priority === TaskPriority.High,
          })}
        >
          {task.priority}
        </p>
      <input type="checkbox" className="w-5 h-5 rounded-xl" />
    </div>
  )
}
