import { Suspense } from 'react'
import ActivityBar from './components/ActivityBar'
import PinnedTasks from './components/PinnedTasks'
import TasksSkeleton from '../../ui/tasks/TasksSkeleton'
import UserWrapper from './components/UserWrapper'
import CardSkeleton from '@/app/ui/card/CardSkeleton'

export default function Dashboard() {
	return (
		<section className='flex flex-col gap-10 mx-2 sm:mx-0'>
			<div className='flex flex-col gap-4'>
				<Suspense fallback={<CardSkeleton />}>
					<UserWrapper />
				</Suspense>
				<h1 className='text-xl font-bold'>Your productivity</h1>
				<Suspense fallback={<CardSkeleton />}>
					<ActivityBar />
				</Suspense>
			</div>
			<div className='flex flex-col justify-between gap-4 sm:flex-row'>
				<div className='h-fit w-full sm:w-6/12 bg-neutral-50 shadow p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col gap-4'>
					<h1 className='texl-2xl font-bold'>Pinned projects</h1>
				</div>
				<div className='h-fit w-full sm:w-6/12 bg-neutral-50 shadow p-2 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col gap-2 md:gap-4'>
					<h1 className='texl-2xl font-bold'>Pinned tasks</h1>
					<Suspense fallback={<TasksSkeleton />}>
						<PinnedTasks />
					</Suspense>
				</div>
			</div>
			<div className='h-fit w-full bg-neutral-50 shadow p-2 sm:p-4 rounded-xl sm:rounded-2xl'>
				<h1 className='texl-2xl font-bold mb-2 sm:mb-4'>All tasks</h1>
			</div>
		</section>
	)
}
