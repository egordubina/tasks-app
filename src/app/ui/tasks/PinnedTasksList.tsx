// import { fetchPinnedTasks } from '@/app/lib/data'
// import TaskItem from '@/app/ui/tasks/TaskItem'

// export default async function PinnedTasksList() {
//   const tasks = await fetchPinnedTasks()
//   return (
//     <div className="flex flex-col gap-2 sm:gap-4">
//       {tasks.length === 0 && <EmptyPinnedTasks />}
//       {tasks.length > 0 && tasks.map((task) => <TaskItem task={task} key={task.id} />)}
//     </div>
//   )
// }

// function EmptyPinnedTasks() {
//   return (
//     <div className="flex flex-col gap-2 items-center">
//       <h1 className="text-md font-bold">Empty</h1>
//       <p>To pin task, click the pin icon</p>
//     </div>
//   )
// }
