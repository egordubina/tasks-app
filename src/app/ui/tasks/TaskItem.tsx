'use client'

import { updateTask, deleteTask } from '@/app/lib/tasks-actions'
import { TaskPriority, TaskStatus, type Task } from '@/app/lib/types'
import { clsx } from 'clsx'
import { useState } from 'react'
import Image from 'next/image'

export default function TaskItem({ task }: { task: Task }) {
	const [isDone, setDone] = useState(task.done)
	const [isPin, setPin] = useState(task.pin)
	const [isEdit, setEdit] = useState(false)
	const [taskTitle, setTaskTitle] = useState(task.title)
	return (
		<div
			className={`rounded-md p-2 flex gap-2 items-center border justify-between transition-all ${
				isDone ? 'bg-neutral-50' : 'bg-neutral-100'
			}`}
		>
			<div className='flex gap-2 items-center'>
				<input //done button click
					onChange={async () => {
						await updateTask({
							...task,
							done: isDone,
						})
						setDone(!isDone)
					}}
					type='checkbox'
					checked={isDone}
					className='w-5 h-5 cursor-pointer transition-all rounded-xl appearance-none checked:bg-green-500 border border-neutral-500 checked:border-green-500'
				/>
				<div className='flex flex-col'>
					<div className='flex w-full items-center justify-between'>
						<div className='flex gap-2 items-center'>
							{!isEdit && (
								<p
									className={`font-bold transition-all cursor-pointer rounded-xl p-1 hover:bg-neutral-200 ${
										isDone ? 'line-through opacity-50' : ''
									}`}
									onClick={() => {
										setEdit(true)
									}}
								>
									{taskTitle}
								</p>
							)}
							{isEdit && (
								<div className='flex gap-2'>
									<input
										type='text'
										value={taskTitle}
										onChange={(e) => {
											setTaskTitle(e.target.value)
										}}
										className='border-2 border-neutral-100 border-b-neutral-500 bg-neutral-100 focus:border-b-blue-500 focus:outline-none'
									/>
									<button
										className='hover:bg-neutral-200 rounded-full transition-all'
										onClick={async () => {
											if (taskTitle != task.title && taskTitle.length != 0) {
												await updateTask({
													...task,
													title: taskTitle,
												})
												setEdit(false)
											} else {
                        setTaskTitle(task.title)
												setEdit(false)
											}
										}}
									>
										<Image width={24} height={24} src='/done.svg' alt='' />
									</button>
								</div>
							)}
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
							{!isDone && (
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
							)}
						</div>
					</div>
					{task.description && (
						<p
							className={`text-xs text-neutral-800 transition-all p-1 ${
								isDone ? 'line-through opacity-50' : ''
							}`}
						>
							{task.description}
						</p>
					)}
				</div>
			</div>
			<div className='flex gap-2 items-center'>
				{!isDone && (
					<button
						className='cursour-pointer rounded-full p-1 md:hover:bg-neutral-200 active:bg-neutral-200'
						onClick={async () => {
							await updateTask({
								...task,
								pin: !isPin,
							})
							setPin(!isPin)
						}}
					>
						{!isPin ? (
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
