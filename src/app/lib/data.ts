import { unstable_noStore as noStore } from 'next/cache'
import { Project, Task } from './types'

const base_url = 'http://192.168.3.23:8080'

export async function fetchTasks(): Promise<Task[]> {
	noStore()
	const data = await (await fetch(`${base_url}/tasks`)).json()
	return data
}

export async function fetchTaskById(id: number): Promise<Task> {
	const data = await (
		await fetch(`${base_url}/tasks/${id}`)
	).json()
	return data
}

export async function fetchPinnedTasks(): Promise<Task[]> {
	noStore()
	const data = await (
		await fetch(`${base_url}/tasks?pinned=true`)
	).json()
	return data
}

export async function fetchUserById(id: number) {
	const data = await (
		await fetch(`${base_url}/users/${id}`)
	).json()
	return data
}

export async function fetchProjects() {
	noStore()
	const data: Project[] = await (
		await fetch(`${base_url}/projects`)
	).json()
	return data
}
