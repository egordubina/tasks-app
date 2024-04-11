'use server'

import { revalidatePath } from 'next/cache'
import { Task, TaskStatus } from './types'

export async function updateTask(task: Task) {
  await fetch('http://192.168.3.23:8080/tasks', {
    method: 'PATCH',
    body: JSON.stringify({
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      done: task.done,
      pin: task.pin
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  revalidatePath('/manager')
}

export async function deleteTask(id: number) {
  await fetch(`http://192.168.3.23:8080/tasks/${id}`, {
    method: 'DELETE'
  })
  revalidatePath('/manager')
}

export async function setDoneTask(id: number) {
  await fetch(`http://192.168.3.23:8080/tasks/${id}`, {
    method: 'POST'
  })
  revalidatePath('/manager')
}

export async function setPinTask(id: number) {
  await fetch(`http://192.168.3.23:8080/tasks/pin/${id}`, {
    method: 'POST'
  })
  revalidatePath('/manager')
}


export async function addTask(task: Task) {
  await fetch('http://192.168.3.23:8080/tasks', {
    method: 'POST',
    body: JSON.stringify({
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: TaskStatus.InProgress,
      done: false,
      pin: false
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  revalidatePath('/manager/tasks')
}
