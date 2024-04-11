import { fetchPinnedTasks } from '@/app/lib/data'
import TasksList from '@/app/ui/tasks/TasksList'

export default async function PinnedTasks() {
	const pinnedTasks = await fetchPinnedTasks()
	return <TasksList tasks={pinnedTasks} />
}
