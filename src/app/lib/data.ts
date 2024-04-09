import { Project, Task } from './types'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchTasks(): Promise<Task[]> {
  noStore()
  const data = await (await fetch("http://192.168.3.23:8080/tasks")).json()
  return data
}

export async function fetchTaskById(id: number): Promise<Task> {
  const data = await (await fetch(`http://192.168.3.23:8080/tasks/${id}`)).json()
  return data
}

export async function fetchPinnedTasks(): Promise<Task[]> {
  noStore()
  const data = await (await fetch("http://192.168.3.23:8080/tasks?pinned=true")).json()
  return data
}

export async function fetchUserById(id: number) {
  const data = await (await fetch(`http://192.168.3.23:8080/users/${id}`)).json()
  return data
}

export async function fetchProjects() {
  const data: Project[] = await (await fetch("http://192.168.3.23:8080/projects")).json()
  return data
}