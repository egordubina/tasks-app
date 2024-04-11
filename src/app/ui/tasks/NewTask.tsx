'use client'

import { addTask } from '@/app/lib/tasks-actions'
import { TaskPriority, TaskStatus } from '@/app/lib/types'
import { useState } from 'react'

export default function NewTask() {
	const [taskValue, setTaskValue] = useState('')

	return (
		<div className='flex gap-2 md:gap-4'>
			<input
				type='text'
				className='p-4 rounded-2xl w-full bg-slate-50 border transition focus:bg-neutral-100 focus:outline-none focus:shadow-xl'
				placeholder='Just start typing a new task'
				value={taskValue}
				onChange={(e) => setTaskValue(e.target.value)}
			/>
			{taskValue && (
				<button
					className='hidden sm:block bg-blue-100 px-6 py-2 rounded-2xl transition hover:bg-blue-200'
					onClick={async () => {
						await addTask({
							id: 1000,
							title: taskValue,
							description: null,
							priority: TaskPriority.High,
							status: TaskStatus.InProgress,
							done: false,
							pin: false,
						})
						setTaskValue('')
					}}
				>
					Create
				</button>
			)}
		</div>
	)
}
