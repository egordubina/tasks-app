'use client'

import { setDoneTask } from '@/app/lib/tasks-actions'
import { TaskPriority, TaskStatus, type Task } from '../../lib/types'
import { clsx } from 'clsx'
import { useState } from 'react'

export default function TaskItem({ task }: { task: Task }) {
  const [isDone, setDone] = useState(task.done)
  return (
    <div className={`rounded-md p-2 flex gap-2 items-center cursor-pointer border transition-all ${isDone ? 'bg-neutral-50' : 'bg-neutral-100'}`}>
      <input
        onChange={async () => {
          await setDoneTask(task.id)
          setDone(!isDone)
        }}
        type="checkbox"
        checked={isDone}
        className="w-5 h-5 cursor-pointer transition-all rounded-xl appearance-none checked:bg-green-500 border border-neutral-500 checked:border-green-500"
      />
      <div className='flex flex-col gap-1'>
        <div className="flex gap-4 items-center">
          <p
            className={`font-bold transition-all ${
              isDone ? 'line-through opacity-50' : ''
            }`}
          >
            {task.title}
          </p>
          {!isDone && (
            <p
              className={clsx('text-xs p-1 rounded-md', {
                'bg-neutral-300 text-neutral-900':
                  task.status === TaskStatus.Backlog,
                'bg-blue-100 text-blue-900':
                  task.status === TaskStatus.InProgress,
              })}
            >
              {task.status === TaskStatus.Backlog && 'backlog'}
              {task.status === TaskStatus.InProgress && 'in progress'}
            </p>
          )}
          {!isDone && <p
            className={clsx('text-xs p-1 rounded-md', {
              'bg-green-200 text-green-900': task.priority === TaskPriority.Low,
              'bg-orange-100 text-orange-900':
                task.priority === TaskPriority.Medium,
              'bg-red-100 text-red-900': task.priority === TaskPriority.High,
            })}
          >
            {task.priority === TaskPriority.Low && 'low'}
            {task.priority === TaskPriority.Medium && 'medium'}
            {task.priority === TaskPriority.High && 'high'}
          </p>}
        </div>
        <p className={`text-xs text-neutral-800 transition-all ${
              isDone ? 'line-through opacity-50' : ''
            }`}>{task.description}</p>
      </div>
    </div>
  )
}
