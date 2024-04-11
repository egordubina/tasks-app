'use server'

import { revalidatePath } from 'next/cache'
import { Task, TaskStatus } from './types'

const base_url = 'http://192.168.3.23:8080'

export async function updateTask(task: Task) {
	await fetch(`${base_url}/tasks`, {
		method: 'PATCH',
		body: JSON.stringify({
			id: task.id,
			title: task.title,
			description: task.description,
			priority: task.priority,
			status: task.status,
			done: task.done,
			pin: task.pin,
		}),
		headers: {
			'Content-type': 'application/json',
		},
	})
	revalidatePath('/manager/tasks')
	revalidatePath('/manager/dashboard')
}

export async function deleteTask(id: number) {
	await fetch(`${base_url}/tasks/${id}`, {
		method: 'DELETE',
	})
	revalidatePath('/manager/tasks')
	revalidatePath('/manager/dashboard')
}

export async function addTask(task: Task) {
	await fetch(`${base_url}/tasks`, {
		method: 'POST',
		body: JSON.stringify({
			id: task.id,
			title: task.title,
			description: task.description,
			priority: task.priority,
			status: TaskStatus.InProgress,
			done: false,
			pin: false,
		}),
		headers: {
			'Content-type': 'application/json',
		},
	})
	revalidatePath('/manager/tasks')
}
