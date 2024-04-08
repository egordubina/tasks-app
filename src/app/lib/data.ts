import { Task } from './types'
import { users, tasks } from './placeholder-data'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchTasks(): Promise<Task[]> {
  noStore()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return tasks.filter(item => item.done === false)
}

export async function fetchPinnedTasks(): Promise<Task[]> {
  noStore()
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return tasks.filter(item => item.pin === true && item.done === false)
}

export async function fetchUserById(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return users.find(item => item.id === id)
}

export async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 2500))
  return 
}