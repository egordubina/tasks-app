import Card from '@/app/ui/card/Card'
import { fetchTasks } from '../../lib/data'

export default async function ActivityBar() {
  const tasks = await fetchTasks()
  return (
    <div className="flex gap-2 sm:gap-4">
      <Card>You have {tasks.length} tasks now</Card>
      <Card>
        Your complete {tasks.filter((item) => item.done).length} tasks today
      </Card>
    </div>
  )
}
