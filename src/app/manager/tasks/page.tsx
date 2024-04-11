import Card from '@/app/ui/card/Card'
import NewTask from '@/app/ui/tasks/NewTask'
import TasksSkeleton from '@/app/ui/tasks/TasksSkeleton'
import { Suspense } from 'react'
import AllTasks from './components/AllTasks'

export default async function Tasks() {
	return (
		<section className='flex flex-col gap-10 mx-2 sm:mx-0'>
			<Card>
				<h1 className='texl-2xl font-bold'>All tasks</h1>
				<NewTask />
				<Suspense fallback={<TasksSkeleton />}>
					<AllTasks />
				</Suspense>
			</Card>
		</section>
	)
}
