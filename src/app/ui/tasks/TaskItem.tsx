'use client'

import { updateTask, deleteTask } from '@/app/lib/tasks-actions'
import { TaskPriority, TaskStatus, type Task } from '@/app/lib/types'
import { clsx } from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
import { useDebouncedCallback } from 'use-debounce'
import SingleSelect from './SingleSelect'

export default function TaskItem({ task }: { task: Task }) {
	const [taskState, setTaskState] = useState({
		taskTitle: task.title,
		isDone: task.done,
		isPin: task.pin,
		taskStatus: task.status,
	})

	const handleTaskTitle = useDebouncedCallback(async (title: string) => {
		if (title != task.title && title.length >= 0)
			await updateTask({ ...task, title: title })
	}, 500)

	return (
		<div
			className={`rounded-md p-2 flex gap-2 items-center border justify-between transition-all ${
				taskState.isDone ? 'bg-neutral-50' : 'bg-neutral-100'
			}`}
		>
			<div className='flex gap-2 items-center'>
				<input //done button click
					onChange={async () => {
						await updateTask({
							...task,
							done: !taskState.isDone,
						})
						setTaskState({ ...taskState, isDone: !taskState.isDone })
					}}
					type='checkbox'
					checked={taskState.isDone}
					className='w-5 h-5 cursor-pointer transition-all rounded-xl appearance-none checked:bg-green-500 border border-neutral-500 checked:border-green-500'
				/>
				<div className='flex flex-col'>
					<div className='flex w-full items-center justify-between'>
						<div className='flex gap-2 items-center'>
							<input
								className={`font-bold transition-all cursor-pointer p-1  focus:outline-none outline-none ${
									taskState.isDone
										? 'bg-neutral-50 line-through opacity-50'
										: 'bg-neutral-100'
								}`}
								value={taskState.taskTitle}
								onChange={(e) => {
									setTaskState({ ...taskState, taskTitle: e.target.value })
									handleTaskTitle(e.target.value)
								}}
							/>
							{!taskState.isDone && (
								<>
									{/* <p
										className={clsx('text-xs p-1 rounded-md', {
											'bg-neutral-300 text-neutral-900':
												task.status === TaskStatus.Backlog,
											'bg-blue-100 text-blue-900':
												task.status === TaskStatus.InProgress,
										})}
									> */}
									<SingleSelect
										onItemClick={(item: string) => {
											setTaskState({
												...taskState,
												taskStatus: TaskStatus.Backlog,
											})
										}}
										value={taskState.taskStatus}
										data={Object.values(TaskStatus)}
									/>
									{/* {task.status === TaskStatus.Backlog && 'backlog'}
										{task.status === TaskStatus.InProgress && 'in progress'} */}
									{/* </p> */}
									<p
										className={clsx('text-xs p-1 rounded-md', {
											'bg-green-200 text-green-900':
												task.priority === TaskPriority.Low,
											'bg-orange-100 text-orange-900':
												task.priority === TaskPriority.Medium,
											'bg-red-100 text-red-900':
												task.priority === TaskPriority.High,
										})}
									>
										{task.priority === TaskPriority.Low && 'low'}
										{task.priority === TaskPriority.Medium && 'medium'}
										{task.priority === TaskPriority.High && 'high'}
									</p>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='flex gap-2 items-center'>
				{!taskState.isDone && (
					<button
						className='cursour-pointer rounded-full p-1 md:hover:bg-neutral-200 active:bg-neutral-200'
						onClick={async () => {
							await updateTask({
								...task,
								pin: !taskState.isPin,
							})
							setTaskState({ ...taskState, isPin: !taskState.isPin })
						}}
					>
						{!taskState.isPin ? (
							<Image src='/keep.svg' width={24} height={24} alt='' />
						) : (
							<Image src='/keep_off.svg' width={24} height={24} alt='' />
						)}
					</button>
				)}
				<button
					className='cursour-pointer rounded-full p-1 md:hover:bg-neutral-200 active:bg-neutral-200'
					onClick={async () => {
						await deleteTask(task.id)
					}}
				>
					<Image src='/delete.svg' width={24} height={24} alt='' />
				</button>
			</div>
		</div>
	)
}
