import type { Task } from '../../lib/types'
import { clsx } from 'clsx'

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-neutral-100 p-4 flex justify-between items-center transition-transform duration-500 md:hover:-translate-y-1',
        {
          'bg-green-100': task.priority === 'low',
          'bg-orange-100': task.priority === 'medium',
          'bg-red-100': task.priority === 'high',
        },
      )}
    >
      <div>
        <h6 className="text-lg font-bold">{task.title}</h6>
        <p className="text-sm">{task.priority}</p>
      </div>
      <input type="checkbox" />
    </div>
  )
}
