import { Task } from '@/app/lib/types'
import { tasks } from '@/app/lib/placeholder-data'

export async function fetchTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return tasks.filter(item => item.done === false)
}

export async function fetchPinnedTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return tasks.filter(item => item.pin === true && item.done === false)
}