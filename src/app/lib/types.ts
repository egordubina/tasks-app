export enum TaskPriority { Low = "LOW", Medium = "MEDIUM", High = "HIGH" }
export enum TaskStatus { InProgress = "IN_PROGRESS", Backlog = "BACKLOG" }

export type NavItem = {
  title: string
  path: string
}

export type Task = {
  id: number
  title: string
  description: string | null
  priority: TaskPriority
  status: TaskStatus
  done: boolean
  pin: boolean
}

export type User = {
  id: number
  name: string
  subtitle: string
}

export type Project = {
  id: number
  name: string
  description: string | null
  tasksIds: Task[]
  usersIds: number[]
}