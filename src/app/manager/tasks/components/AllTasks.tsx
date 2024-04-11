import { fetchTasks } from '@/app/lib/data'
import TasksList from '@/app/ui/tasks/TasksList'

export default async function AllTasks() {
	const tasks = await fetchTasks()
	return <TasksList tasks={tasks} />
}
