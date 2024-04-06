export type NavItem = {
  title: string
  path: string
}

export type Task = {
  title: string
  priority: 'low' | 'medium' | 'high'
  done: boolean
}
