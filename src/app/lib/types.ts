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

export type People = {
  id: number
  name: string
  subtitle: string
  status: 'online' | 'offline'
}
