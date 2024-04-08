export type NavItem = {
  title: string
  path: string
}

export type Task = {
  id: number
  title: string
  priority: 'low' | 'medium' | 'high'
  done: boolean
  pin: boolean
}

export type User = {
  id: number
  name: string
  subtitle: string
  status: 'online' | 'offline'
}

export type Project = {
  id: number
  name: string
  description: string | null
  tasksIds: number[] | null
  usersIds: number[]
}