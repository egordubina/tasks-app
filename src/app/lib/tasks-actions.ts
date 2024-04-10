'use server'

import { revalidatePath } from 'next/cache'
import { Task, TaskStatus } from './types'

export async function setDoneTask(id: number) {
  await fetch(`http://192.168.3.23:8080/tasks/${id}`, {
    method: 'POST'
  })
  revalidatePath('/dashboard')
}

export async function addTask(task: Task) {
  await fetch('http://192.168.3.23:8080/tasks', {
    method: 'POST',
    body: JSON.stringify({
      id: task.id,
      title: task.title,
      priority: task.priority,
      status: TaskStatus.InProgress,
      done: false,
      pin: false
    })
  })
}
